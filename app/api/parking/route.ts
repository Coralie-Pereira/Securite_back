
import { createparkingPlace, deleteParkingPlace, getAllParkingPlace, updateParkingPlace, } from "@/app/database/ParkingPlace/crud";
import { StatusCodes } from "http-status-codes";


const GET = async () => {
    try {
        const parkings = await getAllParkingPlace();
        console.log(parkings);
        const parkingsInfo = parkings.map(parking => ({id: parking.id_pplace, number: parking.number , created_at : parking.created_at, updated_at : parking.updated_at}));
        return Response.json({
                message: "API PARKING : GET",
                status: "Status :"+ StatusCodes.OK,
                parkings: parkingsInfo  
            });

        } catch (error) {
            console.error("Error fetching parking places:", error);
        }
            return Response.json({
                message: "Failed to fetch parking places",
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                error: Error
            });
    }



const POST = async (req: Request) => {
    try{
        const data = await req.json();
        createparkingPlace(data);
        return Response.json({
            message: "API PARKING PLACE : POST",
            status: StatusCodes.CREATED,
            data: data
        });
    }catch (error){
        console.error("Error creating a parking place:", error);
        return Response.json({
            message: "Failed to create object parking",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            error: Error
        });
    }

}


const DELETE = async (req: Request) => {
    try {
        const id_parking = await req.json();
        await deleteParkingPlace(id_parking.id);

        return Response.json({
            message: "API PARKING : DELETE",
            status: StatusCodes.NO_CONTENT,
        });

    } catch (error) {
        console.error("Error deleting the parking:", error);

        return Response.json({
            message: "Failed to delete the parking",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    }
}


const PUT = async (req: Request) => {
    try {
        const { id, parking } = await req.json();

        await updateParkingPlace(id, parking);

        return Response.json({
            message: "API PARKING : PUT",
            status: StatusCodes.NO_CONTENT,
        });

    } catch (error) {
        
        console.error("Error updating the parking:", error);

        return Response.json({
            message: "Failed to update the parking",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    }
}


const PATCH = async (req: Request) => {
    try {

        const { id, partialparking } = await req.json();
        await updateParkingPlace(id, partialparking);

        return Response.json({
            message: "API PARKING : PATCH",
            status: StatusCodes.OK,
        });
    } catch (error) {
        console.error("Error patching the parking:", error);

        return Response.json({
            message: "Failed to patch the parking",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    }
}
export {GET, POST, DELETE, PUT, PATCH};