import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-year-dropdown',
  templateUrl: './year-dropdown.component.html',
  styleUrls: ['./year-dropdown.component.scss']
})
export class YearDropdownComponent implements OnInit {
  years: number[] = [];

  @Output() yearSelected = new EventEmitter<{ startDate: Date, endDate: Date }>();

  onYearSelected(year) {
    const startDate = new Date(year.value, 0, 1);
    const endDate = new Date(year.value, 11, 31)
    endDate.setHours(23, 59, 59, 999);
    this.yearSelected.emit({startDate, endDate});
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 10; i--) {
      this.years.push(i);
    }
  }
}
