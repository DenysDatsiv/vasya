import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {Subject, takeUntil} from 'rxjs';
import { SpendingService } from "../../../../core/services/spending.service";
import { Expense } from "../../../../core/interfaces/interfaces";
import {navTabs} from "../../../../core/tabs_nav/_navTabs";

@Component({
  selector: 'app-driver-track-spending-main',
  templateUrl: './driver-track-spending-main.component.html',
  styleUrls: ['./driver-track-spending-main.component.scss']
})
export class DriverTrackSpendingMainComponent implements OnInit, OnDestroy {
  tabs = navTabs
  expenses: Expense[] = [];
  totalSpendingAmount: number;
  expanded: boolean = false;
  showFilter: boolean = false;
  groupedExpenses: { date: string, expenses: Expense[] }[] = [];
  todayDate: string = new Date().toLocaleDateString();
  filterForm: FormGroup;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private spendingService: SpendingService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeDates();
    this.initializeForm();
    this.groupExpenses();
  }

  toggleFooter = () => {
    this.expanded = !this.expanded;
    this.groupExpenses();
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  addNewSpending = () => {
    this.router.navigate(['driver/track_spending/add-expense']).catch(error => {
      console.error('Error navigating:', error);
    });
  }

  handleFilteredData(filteredData: Expense[]) {
    this.expenses = filteredData;
    this.groupedExpenses = this.groupAndSortExpenses(filteredData);
  }

  receiveShowFilterValue(showFilter: boolean) {
    this.showFilter = showFilter;
  }

  private initializeDates(): void {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(23, 59, 59, 999);
    this.getFilteredSpending({ startDate, endDate });
  }

  private initializeForm(): void {
    this.filterForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      expenseType: ['']
    });
  }

  private groupExpenses() {
    this.spendingService.getSpendingData(this.expanded)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: Expense[]) => {
          this.expenses = data;
          this.groupedExpenses = this.groupAndSortExpenses(data);
        },
        (error) => console.error('Error fetching data:', error)
      );
  }

  private groupAndSortExpenses(expenses: Expense[]): { date: string, expenses: Expense[] }[] {
    const grouped = new Map<string, Expense[]>();

    expenses.forEach(expense => {
      const date = new Date(expense.createdAt).toLocaleDateString();
      if (!grouped.has(date)) {
        grouped.set(date, []);
      }
      grouped.get(date).push(expense);
    });

    grouped.forEach(expenses => {
      expenses.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });

    return Array.from(grouped.entries()).map(([date, expenses]) => ({ date, expenses }));
  }

  getFilteredSpending(dateRange: { startDate: Date, endDate: Date }) {
    const { startDate, endDate } = dateRange;
    const params = {startDate, endDate};

    this.spendingService.getFilteredSpendingAmount(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        result => {
          this.totalSpendingAmount = result;
        },
        error => {
          console.error('Error:', error);
          if (error === 'No data available') {
            this.totalSpendingAmount = 0;
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
