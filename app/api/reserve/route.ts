import { getAllReservation,getReservation,deleteReservation,updateReservation} from "@/app/database/Reservation/crud";
import exp from "constants";
import { StatusCodes } from "http-status-codes";

const GET = async () => {
    try {
        const reservations = await getAllReservation();
        console.log(reservations);
        const reservationsInfo = reservations.map(reservation => ({id: reservation.id_reservation, id_user: reservation.pplace_id, id_vehicle: reservation.car_plate, start_date : reservation.valide_from, end_date : reservation.valide_to, status : reservation.id_status, created_at : reservation.created_at, updated_at : reservation.updated_at}));
        return Response.json({
                message: "API RESERVATIONS : GET",
                status: "Status :"+ StatusCodes.OK,
                reservations: reservationsInfo
            });

        }catch (error) {
            console.error("Error fetching reservations:", error); {
                
            }
        }   return Response.json({
                message: "Failed to fetch reservations",
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                error: Error
            });
        }
export {GET};