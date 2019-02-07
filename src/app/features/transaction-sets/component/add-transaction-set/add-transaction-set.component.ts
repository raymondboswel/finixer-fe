import { TransactionSetsService } from "./../../transaction-sets.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add-transaction-set",
  templateUrl: "./add-transaction-set.component.html",
  styleUrls: ["./add-transaction-set.component.scss"]
})
export class AddTransactionSetComponent implements OnInit {
  fileSelected = false;
  file;
  transactionSetFormGroup: FormGroup;
  constructor(
    public fb: FormBuilder,
    private transactionSetsService: TransactionSetsService
  ) {}

  ngOnInit() {
    this.transactionSetFormGroup = this.fb.group({
      title: "",
      startDate: new Date(),
      endDate: new Date()
    });
  }

  uploadFile() {
    const startDate = this.transactionSetFormGroup.controls["startDate"].value;
    const endDate = this.transactionSetFormGroup.controls["endDate"].value;
    const title = this.transactionSetFormGroup.controls["title"].value;
    if (!this.fileSelected) {
      alert("Please select a file.");
    } else {
      this.transactionSetsService
        .uploadTransactionSet(this.file, title, startDate, endDate)
        .subscribe();
      this.fileSelected = false;
    }
  }

  setSelectedFile(evt) {
    this.fileSelected = true;
    this.file = evt.target.files[0];
    console.log(evt);
  }

  cancelSelection() {
    this.fileSelected = false;
  }
}
