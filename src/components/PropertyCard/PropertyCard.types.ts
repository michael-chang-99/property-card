export type Status = 'active' | 'pending' | 'sold';

export interface Baths {
  full: number;
  half: number;
}

export interface Address {
  street: string;
  unit: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface Features {
  interior: string[] | null;
  exterior: string[] | null;
  amenities: string[] | null;
}

export interface PriceHistoryEntry {
  date: string;
  price: number;
  event: 'listed' | 'reduced' | 'sold';
}

export interface Photo {
  url: string;
  caption?: string;
  isPrimary: boolean;
}

export interface Agent {
  name: string;
  photo: string | null;
  contact: {
    phone: string;
    email: string;
    office: {
      name: string;
      address?: string;
    };
  };
}

export interface Property {
  id: string;
  status: Status;
  listing: {
    price: number;
    priceHistory: PriceHistoryEntry[];
    address: Address;
    details: {
      beds: number;
      baths: Baths;
      sqft: number;
      yearBuilt: number;
      features: Features;
    };
  };
  agent: Agent;
  openHouses: unknown[];
  media: {
    photos: Photo[];
    virtualTour: string | null;
  };
}
