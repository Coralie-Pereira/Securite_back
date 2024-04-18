import { prismaClient } from "../global";

export async function createReservation(user_id : number, pplace_id : number, valide_from : Date, valide_to: Date, car_plate: string, id_status: number) {
    const newReservation = await prismaClient.reservation.create({
        data: {
            user_id: user_id,
            pplace_id: pplace_id,
            valide_from: valide_from,
            valide_to: valide_to,
            car_plate: car_plate,
            id_status: id_status,
        }
    });
    console.log('Reservation created:', newReservation);
};

export async function getReservation(id : number) {
    const reservation = await prismaClient.reservation.findUnique({
        where: {
            id_reservation: id
        }
    });
    console.log('Reservation:', reservation);
    return reservation;
};

export async function getAllReservation() {
    const reservations = await prismaClient.reservation.findMany();
    console.log('Reservations:', reservations);
    return reservations;
};

export async function updateReservation(id : number) {
    const updateReservation = await prismaClient.reservation.update({
        where: {
            id_reservation: id
        },
        data: {
            updated_at: new Date()
        }
    });
    console.log('Reservation updated:', updateReservation);
};

export async function deleteReservation(id : number) {
    const deletedReservation = await prismaClient.reservation.delete({
        where: {
            id_reservation: id
        }
    });
    console.log('Reservation deleted:', deletedReservation);
};

