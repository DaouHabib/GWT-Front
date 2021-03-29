import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../../@fuse/animations';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-electrovans',
  templateUrl: './electrovans.component.html',
  styleUrls: ['./electrovans.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ElectrovansComponent implements OnInit {
  electrovans:any[];

  constructor(private toastService:ToastService) { }

  ngOnInit(): void {
    this.electrovans=[{
      "name":"e1",
      "status":true
  },
  {
      "name":"e2",
      "status":true
  },{
      "name":"e3",
      "status":true
  }]
  }
  changed(){
this.toastService.success("Electrovane Opened","Operation Succeded")
}
}
