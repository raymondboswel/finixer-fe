import { MatTableModule } from "@angular/material/table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatDatepicker,
  MatDatepickerModule
} from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  imports: [MatTableModule, CommonModule]
})
export class MaterialModule {}
