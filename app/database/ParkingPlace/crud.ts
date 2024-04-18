import { prismaClient } from "../global";

export async function createparkingPlace(id_pplace : number, number : number, floor : number) {
    const newReservation = await prismaClient.parkingPlace.create({
        data: {
            id_pplace: id_pplace,
            number: number,
            floor: floor,
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

export async function updateParkingPlace(id : number) {
    const updateparkingPlace = await prismaClient.parkingPlace.update({
        where: {
            id_pplace: id
        },
        data: {
            updated_at: new Date()
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

