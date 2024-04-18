import { ReservationInterface } from "@/models/Reservation";
import { prismaClient } from "../global";

export async function createReservation(reservation: ReservationInterface) {
    const newReservation = await prismaClient.reservation.create({
        data: {
            user_id: reservation.user_id,
            pplace_id: reservation.pplace_id,
            valide_from: reservation.valide_from,
            valide_to: reservation.valide_to,
            car_plate: reservation.car_plate,
            id_status: reservation.id_status,
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

export async function updateReservation(id : number, reservation: ReservationInterface) {
    const updateReservation = await prismaClient.reservation.update({
        where: {
            id_reservation: id
        },
        data: {
            user_id: reservation.user_id,
            pplace_id: reservation.pplace_id,
            valide_from: reservation.valide_from,
            valide_to: reservation.valide_to,
            car_plate: reservation.car_plate,
            id_status: reservation.id_status,
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

