import {Component, EventEmitter, Output} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-custom-picker',
  templateUrl: './custom-picker.component.html',
  styleUrls: ['./custom-picker.component.scss']
})
export class CustomPickerComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;

  @Output() dateRangeSelected = new EventEmitter<{ startDate: Date, endDate: Date }>();

  onDateChange(event: MatDatepickerInputEvent<Date>, type: string) {
    if (type === 'start') {
      this.startDate = event.value;
    } else if (type === 'end') {
      this.endDate = event.value;
      this.endDate.setHours(23, 59, 59, 999)
    }
    this.dateRangeSelected.emit({startDate: this.startDate, endDate: this.endDate});
  }

}
