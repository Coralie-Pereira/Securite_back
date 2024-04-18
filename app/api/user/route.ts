
import { StatusCodes } from "http-status-codes";
import { getAllUser,getUser,createUser,deleteUser,updateUser} from "@/app/database/User/crud";

const GET = async () => {
    const users = await getAllUser();
    console.log(users);
    const usersInfo = users.map(user => ({id: user.id_user, name: user.name, email: user.email, phone : user.phone_number, role : user.role_id, created_at : user.created_at, updated_at : user.updated_at}));
    return Response.json({
        message: "API USERS : GET",
        users: usersInfo
    });
}


const POST = async (req: Request) => {
    const data = await req.json();
    createUser(data);
    return Response.json({message: "API USERS : POST"});
}


const DELETE = async (req:Request) => {
    const id_user = await req.json();

    deleteUser(id_user.id);
    return Response.json({message: "API USERS : DELETE"});
}
const PUT = () => {
    return Response.json({message: "API USERS : PUT"}, {status: StatusCodes.OK});
}

const PATCH = () => {
    return Response.json({message: "API USERS : PATCH"});
}

export {GET, POST, DELETE, PUT, PATCH};