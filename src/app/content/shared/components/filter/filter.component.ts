import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
@Input() resetedForm;
@Input() showFilter;

clearFiltration()
{
  this.showFilter=true
  this.resetedForm.reset();
}
}
