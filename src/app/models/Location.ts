import { Review } from './Review';

export class Location {
    _id: string;
    name: string;
    address: string;
    rating: number;
    facilities: string[];
    coords: string[];
    openingTimes: string[];
    reviews: Array<Review>;
}