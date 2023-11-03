import {Component, Input, OnInit} from '@angular/core';
import {AccordionDataService} from "../../../../core/services/accordion-data.service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit{
  @Input() orderData: any = []; //ToDo:change any
  panels ;

  constructor(private accordionDataService: AccordionDataService) {}
  ngOnInit(): void {
    this.panels = this.accordionDataService.getPanels(this.orderData);
  }

}
