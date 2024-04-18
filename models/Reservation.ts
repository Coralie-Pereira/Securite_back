export interface ReservationInterface{
    id_reservation: number;
    user_id: number;
    pplace_id: number;
    valide_from: Date;
    valide_to: Date;
    car_plate: string;
    id_status: number;
    created_at: Date;
    updated_at: Date;
}