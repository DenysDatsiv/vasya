import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.scss']
})
export class DayPickerComponent {
  @Output() daySelected = new EventEmitter<{ startDate: Date, endDate: Date }>();

  onDaySelected(event) {
    const startDate = event.value;
    const endDate = new Date(startDate);
    endDate.setHours(23, 59, 59, 999);
    this.daySelected.emit({startDate, endDate});
  }
}
