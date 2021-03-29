import { Component, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '../../../@fuse/animations';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class AlertesComponent implements OnInit {
  Alertesdatasource: any;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

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


}
