export type User = {
    id: number;
    name: string;
    email: string;
};

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

export type ApiResponse<T> = {
    data: T;
    error?: string;
};