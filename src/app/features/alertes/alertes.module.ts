import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertesRoutingModule } from './alertes-routing.module';
import { AlertesComponent } from './alertes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseSidebarModule, FuseWidgetModule } from '../../../@fuse/components';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { CustumersRoutingModule } from '../custumers/custumers-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModalModule } from '../../shared/components/confirmation-modal/confirmation-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [AlertesComponent],
  imports: [
    CommonModule,
    AlertesRoutingModule,
    HttpClientModule,
    ConfirmationModalModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
    CustumersRoutingModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTabsModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AlertesModule { }
