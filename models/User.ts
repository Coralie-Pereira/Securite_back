export interface UserInterface {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    birthday?: string;
    role_id: number;
    created_at: Date;
    updated_at: Date;
}