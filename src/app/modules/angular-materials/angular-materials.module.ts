import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatBadgeModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTreeModule } from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';


const materialsModule = [
  // CdkTreeModule,
  // MatAutocompleteModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatChipsModule,
  // MatMenuModule,
  // MatProgressSpinnerModule,
  // MatPaginatorModule,
  // MatRippleModule,
  // MatSelectModule,
  // MatSidenavModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  // MatFormFieldModule,
  // MatButtonToggleModule,
  // MatTreeModule,
  // OverlayModule,
  // PortalModule,
  // MatBadgeModule,
  // MatGridListModule,
  // MatDatepickerModule,

  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialsModule
  ],
  exports: [
    ...materialsModule
  ]
})
export class AngularMaterialsModule { }
