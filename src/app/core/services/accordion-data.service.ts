import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionDataService {
  getPanels(orderData: any): any[] {
    if (orderData) {
      return [
        {
          title: 'Pickup and Delivery Details:',
          content: [
            {
              title: 'Pick up Details',
              content: [
                {label: 'Location', value: orderData.pickupDetails?.location},
                {label: 'Contact Name', value: orderData.pickupDetails?.contactName},
                {label: 'Contact Phone', value: orderData.pickupDetails?.contactPhone},
                {label: 'Load Date', value: orderData.pickupDetails?.loadDate}
              ]
            },
            {
              title: 'Delivery Details',
              content: [
                {label: 'Contact Phone', value: orderData.deliveryDetails?.contactPhone},
                {label: 'Location', value: orderData.deliveryDetails?.location},
                {label: 'Contact Name', value: orderData.deliveryDetails?.contactName},
                {label: 'Delivery Date', value: orderData.deliveryDetails?.deliveryDate}
              ]
            }
          ]
        },
        {
          title: 'Cargo Details:',
          content: [
            {
              content: [
                {label: 'Type', value: orderData.cargoDetails?.type},
                {label: 'Weight', value: orderData.cargoDetails?.weight},
                {label: 'Dimensions', value: orderData.cargoDetails?.dimensions}
              ]
            }
          ]
        },
        {
          title: 'Load Information:',
          content: [
            {
              content: [
                {label: 'Trailer Number', value: orderData.loadInfo?.trailerNumber},
                {label: 'Load Number', value: orderData.loadInfo?.loadNumber},
                {label: 'Seal Number', value: orderData.loadInfo?.sealNumber}
              ]
            }
          ]
        },
        {
          title: 'Bill of Lading:',
          content: [
            {
              content: [
                {label: 'Date', value: orderData.BOL?.date},
                {label: 'Number', value: orderData.BOL?.number},
                {label: 'File', value: orderData.BOL?.pdfLink}
              ]
            }
          ]
        },
        {
          title: 'Contact Information:',
          content: [
            {
              title: 'Shipper',
              content: [
                {label: 'Address', value: orderData.contactInfo.shipper?.address},
                {label: 'Phone', value: orderData.contactInfo.shipper?.address},
                {label: 'Name', value: orderData.contactInfo.shipper?.name}
              ]
            },
            {
              title: 'Consignee',
              content: [
                {label: 'Phone', value: orderData.contactInfo.consignee?.phone},
                {label: 'Address', value:orderData.contactInfo.consignee?.address},
                {label: 'Name', value: orderData.contactInfo.consignee?.name}
              ]
            }
          ]
        },
        {
          title: 'Insurance and Liability Info:',
          content: [
            {
              content: [
                {label: 'Policy Number', value: orderData.insuranceAndLiability?.policyNumber},
                {label: 'Liability Amount', value: orderData.insuranceAndLiability?.liabilityAmount},
                {label: 'Insurance Company', value: orderData.insuranceAndLiability?.insuranceCompany}
              ]
            }
          ]
        }
      ];
    }
    return [];
  }
}
