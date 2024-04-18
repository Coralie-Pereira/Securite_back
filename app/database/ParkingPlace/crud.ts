import { ParkingPlaceInterface } from "@/models/ParkingPlace";
import { prismaClient } from "../global";

export async function createparkingPlace(parkingPlace : ParkingPlaceInterface) {
    const newReservation = await prismaClient.parkingPlace.create({
        data: {
            number: parkingPlace.number,
            floor: parkingPlace.floor,
        }
    });
    console.log('Reservation created:', newReservation);
};

export async function getParkingPlace(id : number) {
    const parkingPlace = await prismaClient.parkingPlace.findUnique({
        where: {
            id_pplace: id
        }
    });
    console.log('Parking Place:', parkingPlace);
    return parkingPlace;
};

export async function getAllParkingPlace() {
    const parkingPlaces = await prismaClient.parkingPlace.findMany();
    console.log('Parking Places:', parkingPlaces);
    return parkingPlaces;
};

export async function updateParkingPlace(id : number, parkingPlace: ParkingPlaceInterface) {
    const updateparkingPlace = await prismaClient.parkingPlace.update({
        where: {
            id_pplace: id
        },
        data: {
            number: parkingPlace.number,
            floor: parkingPlace.floor,
            created_at: parkingPlace.created_at,
            updated_at: new Date(),
        }
    });
    console.log('Reservation updated:', updateparkingPlace);
};

export async function deleteParkingPlace(id : number) {
    const deletedparkingPlace = await prismaClient.parkingPlace.delete({
        where: {
            id_pplace: id
        }
    });
    console.log('Reservation deleted:', deletedparkingPlace);
};

