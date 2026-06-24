import { PropertyCard } from './components/PropertyCard';
import type { Property } from './components/PropertyCard';

const mockProperty: Property = {
  id: 'prop_abc123',
  status: 'active',
  listing: {
    price: 485000,
    priceHistory: [
      { date: '2024-01-15', price: 500000, event: 'listed' },
      { date: '2024-02-20', price: 485000, event: 'reduced' },
    ],
    address: {
      street: '123 Maple Ave',
      unit: null,
      city: 'Austin',
      state: 'TX',
      zip: '78701',
    },
    details: {
      beds: 3,
      baths: { full: 2, half: 1 },
      sqft: 1820,
      yearBuilt: 1998,
      features: {
        interior: ['Hardwood floors', 'Granite counters', 'Open kitchen'],
        exterior: ['2-car garage', 'Large backyard'],
        amenities: null,
      },
    },
  },
  agent: {
    name: 'Sarah Chen',
    photo: null,
    contact: {
      phone: '512-555-0192',
      email: 'sarah@realty.com',
      office: { name: 'Austin Premier Realty' },
    },
  },
  openHouses: [],
  media: {
    photos: [
      { url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800', caption: 'Front exterior', isPrimary: true },
      { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', caption: 'Living room', isPrimary: false },
      { url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800', caption: 'Kitchen', isPrimary: false },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', caption: 'Backyard', isPrimary: false },
    ],
    virtualTour: null,
  },
};

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B949E', marginBottom: 16 }}>
        Components / Cards / PropertyCard
      </h1>
      <PropertyCard property={mockProperty} />
    </div>
  );
}
