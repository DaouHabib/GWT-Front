import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { startWith, map } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

import { ToastService } from 'app/shared/services/toast.service';
import { fuseAnimations } from "../../../@fuse/animations";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class HomeComponent implements OnInit, OnDestroy {

    stations: any[];
    lots:any[];
    fields:any[];

    stateCtrl = new FormControl();
    filteredStates: Observable<any[]>;
    checked = false;
    subscription: Subscription;

    ngOnInit(): void {
        this.fields= [{
            "_id":"123",
            "Adresse":"Tunis",
            "name":"Makki",
            "globalArea":5
        },
        {
            "_id":"123",
            "Adresse":"sfax",
            "name":"Makki",
            "globalArea":500
        }];
    }

    constructor(
      
        private toastService: ToastService
    ) {
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
            startWith(""),
            map((state) =>
                state ? this._filterStates(state) : this.stations.slice()
            )
        );
    }
    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }
    changed(){
        console.log("Changed")
      
    }
    getlots(){

        this.lots= [{
            "_id":"123",
            "name":"Tunis",
            "volume":500,
            "min":50,
            "max":100,

        },
        {
            "_id":"123",
            "name":"sfax",
            "volume":500,
            "min":500,
            "max":1000
        },
        {
            "_id":"123",
            "name":"mahdia",
            "volume":500,
            "min":544,
            "max":1044
        }];
    }

    private _filterStates(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.stations.filter(
            (state) => state.city.toLowerCase().indexOf(filterValue) === 0
        );
    }

 

}
