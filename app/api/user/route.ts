
import { StatusCodes } from "http-status-codes";
import { getAllUser,getUser,createUser,deleteUser,updateUser} from "@/app/database/User/crud";

const GET = async () => {
    try {
        const users = await getAllUser();
        console.log(users);
        const usersInfo = users.map(user => ({id: user.id_user, name: user.name, email: user.email, phone : user.phone_number, role : user.role_id, created_at : user.created_at, updated_at : user.updated_at}));
        return Response.json({
                message: "API USERS : GET",
                status: "Status :"+ StatusCodes.OK,
                users: usersInfo
            });

        } catch (error) {
            console.error("Error fetching users:", error);
        }
            return Response.json({
                message: "Failed to fetch users",
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                error: Error
            });
    }



const POST = async (req: Request) => {
    try{
        const data = await req.json();
        createUser(data);
        return Response.json({
            message: "API USERS : POST",
            status: StatusCodes.CREATED,
            data: data
        });
    }catch (error){
        console.error("Error creating a user:", error);
        return Response.json({
            message: "Failed to create object User",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            error: Error
        });
    }

}


const DELETE = async (req: Request) => {
    try {
        const id_user = await req.json();
        await deleteUser(id_user.id);

        return Response.json({
            message: "API USERS : DELETE",
            status: StatusCodes.NO_CONTENT,
        });
        
    } catch (error) {
        console.error("Error deleting the user:", error);

        return Response.json({
            message: "Failed to delete the user",
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    }
}


const PUT = () => {
    return Response.json({message: "API USERS : PUT"}, {status: StatusCodes.OK});
}

const PATCH = () => {
    return Response.json({message: "API USERS : PATCH"});
}

export {GET, POST, DELETE, PUT, PATCH};