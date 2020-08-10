import { Order } from "./order";

export class FullData {
    created_at: string;
    id: number;
    min: number;
    order_items:Order[];
    restaurant:Restaurant;
    status: number;
    tax_per_person: number;
    updated_at: string;
    user:User;
}

export class User {
    confirmation_token: string;
    confirmed: number;
    created_at: Date;
    email: string;
    id: number;
    name: string;
    short_name: string;
    updated_at: Date;
}

export class Restaurant {
    added_by: number;
    created_at: Date;
    fees: number;
    id: number;
    phone: number;
    tax: number;
    title: string;
    updated_at: string;
}