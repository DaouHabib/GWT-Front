import { Component, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '../../../@fuse/animations';
import { AgmCoreModule } from '@agm/core';
AgmCoreModule.forRoot({
  apiKey: "AIzaSyB6E1byAgdeTa4HETohIdAzmOCtn2WK4y8",
  libraries: ['places', 'drawing', 'geometry']
 })
 declare const google: any;
@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class AlertesComponent implements OnInit {
  Alertesdatasource: any;
  lat = 20.5937;
  lng = 78.9629;
  drawingManager:any;
  pointList: { lat: number; lng: number }[] = [];
  selectedArea = 0;
  selectedShape:any;  
  constructor(public dialog: MatDialog) { }
  onMapReady(map) {
    this.initDrawingManager(map);
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  ngOnInit(): void {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
       drawingModes: ['polygon'],
      },
      polygonOptions: {
       draggable: true,
       editable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
     };
     this.drawingManager = new google.maps.drawing.DrawingManager(options);
this.setCurrentPosition();
    this.Alertesdatasource = new MatTableDataSource<any>([
      {"Type":"Success",
      "Message":"Electrovane 1 On"

    },
    {"Type":"Success",
    "Message":"Electrovane 2 On"

  }  ,
   {"Type":"Success",
  "Message":"Electrovane 3 Off"

}
  
  ])  }




  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
      "Type",
      "Message",
      "actions",
  ];

  ngOnChanges(changes: SimpleChanges): void {
      if (changes["Alertesdatasource"].currentValue != undefined) {
          this.Alertesdatasource.paginator = this.paginator;
      }
  };
  initDrawingManager = (map: any) => {
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON)    {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(
              paths.getAt(p),
              'set_at',
              () => {
                if (!event.overlay.drag) {
                  self.updatePointList(event.overlay.getPath());
                }
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'insert_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'remove_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
          }
          self.updatePointList(event.overlay.getPath());
        }
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          self.drawingManager.setDrawingMode(null);
          // To hide:
          self.drawingManager.setOptions({
            drawingControl: false,
          });
        }
      }
    );
  }
  updatePointList(path) {
    this.pointList = [];
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      this.pointList.push(
        path.getAt(i).toJSON()
      );
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }
  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
      this.pointList = [];
    }
  }
  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
  }
  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      this.selectedArea = 0;
      this.pointList = [];
      // To show the controls:
      this.drawingManager.setOptions({
        drawingControl: true,
      });
    }
  }
}
