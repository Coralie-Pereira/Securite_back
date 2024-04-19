import { createReservation, deleteReservation, getAllReservations, updateReservation } from "@/app/database/Reservation/crud";
import { StatusCodes } from "http-status-codes";

const GET = async () => {
    try {
        const reservations = await getAllReservations();
        console.log(reservations);
        const reservationsInfo = reservations.map(reservation => ({
            id: reservation.id_reservation,
            // Assuming you have other relevant fields here
            created_at: reservation.created_at,
            updated_at: reservation.updated_at
        }));
        return Response.json({
            message: "API RESERVATION : GET",
            status: "Status: " + StatusCodes.OK,
            reservations: reservationsInfo
        });
    } catch (error) {
        console.error("Error fetching reservations:", error);
        return Response.json({
            message: "Failed to fetch reservations",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            error: error.message
        });
    }
}

const POST = async (req: Request) => {
    try {
        const data = await req.json();
        createReservation(data);
        return Response.json({
            message: "API RESERVATION : POST",
            status: StatusCodes.CREATED,
            data: data
        });
    } catch (error) {
        console.error("Error creating a reservation:", error);
        return Response.json({
            message: "Failed to create reservation",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            error: error.message
        });
    }
}

const DELETE = async (req: Request) => {
    try {
        const id_reservation = await req.json();
        await deleteReservation(id_reservation.id);
        return Response.json({
            message: "API RESERVATION : DELETE",
            status: StatusCodes.NO_CONTENT
        });
    } catch (error) {
        console.error("Error deleting the reservation:", error);
        return Response.json({
            message: "Failed to delete the reservation",
            status: StatusCodes.INTERNAL_SERVER_ERROR
        });
    }
}

const PUT = async (req: Request) => {
    try {
        const { id, reservation } = await req.json();
        await updateReservation(id, reservation);
        return Response.json({
            message: "API RESERVATION : PUT",
            status: StatusCodes.NO_CONTENT
        });
    } catch (error) {
        console.error("Error updating the reservation:", error);
        return Response.json({
            message: "Failed to update the reservation",
            status: StatusCodes.INTERNAL_SERVER_ERROR
        });
    }
}

const PATCH = async (req: Request) => {
    try {
        const { id, partialReservation } = await req.json();
        await updateReservation(id, partialReservation);
        return Response.json({
            message: "API RESERVATION : PATCH",
            status: StatusCodes.OK
        });
    } catch (error) {
        console.error("Error patching the reservation:", error);
        return Response.json({
            message: "Failed to patch the reservation",
            status: StatusCodes.INTERNAL_SERVER_ERROR
        });
    }
}

export { GET, POST, DELETE, PUT, PATCH };