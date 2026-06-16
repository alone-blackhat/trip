/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  description: string;
  longDescription: string;
  bestTime: string;
  seasonalHighlights: string[];
  tourSpecialties: {
    title: string;
    description: string;
    tamilName?: string;
  }[];
  basePricePerTourist: number;
}

export interface TravelMode {
  id: string;
  name: string;
  tamilName: string;
  description: string;
  icon: string; // e.g., "Compass", "MapPin", "Car", "Trees"
  tierOptions: {
    name: string;
    tamilName: string;
    price: number;
    description: string;
  }[];
  itineraryDays: {
    day: string;
    activity: string;
    description: string;
  }[];
  basePrice: number;
}

export interface TraditionalDish {
  id: string;
  name: string;
  tamilName: string;
  category: 'welcome' | 'main' | 'sides' | 'dessert';
  description: string;
  pricePerPlate: number;
  selectedByDefault?: boolean;
}

export interface TravelPassTemplate {
  travelerName: string;
  coTravelers: string;
  destinationTitle: string;
  travelModeTitle: string;
  date: string;
  groupSize: string;
  selectedOption: string;
  borderStyle: 'gold-gilt' | 'tropical-palm' | 'vintage-rail' | 'coastal-wave';
  textColor: string;
  specialRequests: string;
}

export interface TripCalculatorState {
  travelModeId: string;
  destinationId: string;
  travelersCount: number;
  tierIndex: number;
  accommodationType: 'heritage' | 'luxury' | 'standard';
  selectedDishes: string[]; // regional foodie trails chosen
  jeepSafariSelected: boolean;
  hdPhotographySelected: boolean;
  localGuideSelected: boolean;
}
