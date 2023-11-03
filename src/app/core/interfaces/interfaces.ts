export interface Expense {
  id: number;
  driverId: number;
  carId: number;
  amount: number;
  type: string;
  description: string;
  createdAt: string;
}
export interface Order {
  id: string;
  pickupDetails: {
    contactPhone: string;
    contactName: string;
    location: {
      latitude: number;
      longitude: number;
    };
    loadDate: string;
  };
  createdAt: string;
  scheduledTime: string;
  deliveryDetails: {
    location: {
      latitude: number;
      longitude: number;
    };
    contactName: string;
    contactPhone: string;
    deliveryDate: string;
  };
  insuranceAndLiability: {
    insuranceCompany: string;
    policyNumber: string;
    liabilityAmount: number;
  };
  loadInfo: {
    loadNumber: string;
    sealNumber: string;
    trailerNumber: string;
  };
  contactInfo: {
    shipper: {
      address: string;
      name: string;
      phone: string;
    };
    consignee: {
      name: string;
      phone: string;
      address: string;
    };
  };
  status: string;
  cargoDetails: {
    weight: number;
    dimensions: string;
    type: string;
  };
  BOL: {
    pdfLink: string;
    number: string;
    date: string;
  };
  driverId: string;
}
