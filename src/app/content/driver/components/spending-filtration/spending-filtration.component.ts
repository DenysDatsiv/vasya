import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SpendingService } from "../../../../core/services/spending.service";
import { Subscription } from 'rxjs';
import {Expense} from "../../../../core/interfaces/interfaces";

@Component({
  selector: 'app-spending-filtration',
  templateUrl: './spending-filtration.component.html',
  styleUrls: ['./spending-filtration.component.scss']
})
export class SpendingFiltrationComponent implements OnInit, OnDestroy {
  @Input() showFilter;

  @Output() filteredData = new EventEmitter<Expense[]>();
  @Output() showFilterValue = new EventEmitter<boolean>();
  filterForm: FormGroup;
  private filteringSubscription: Subscription;

  constructor(
    private spendingService: SpendingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      typeOfExpense:['']
    });
  }

  applyFiltering() {
    this.showFilterValue.emit(!this.showFilter);
    this.showFilter = !this.showFilter;

    const params = {
      startDate: this.filterForm.get('startDate').value,
      endDate: this.filterForm.get('endDate').value,
      type: this.filterForm.get('typeOfExpense').value
    };

    this.filteringSubscription = this.spendingService.getFilteredSpendingData(params).subscribe(filteredData => {
      this.filteredData.emit(filteredData);
    });
    this.filterForm.reset();
  }

  ngOnDestroy() {
    if (this.filteringSubscription) {
      this.filteringSubscription.unsubscribe();
    }
  }
}
