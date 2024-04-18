
import { StatusCodes } from "http-status-codes";
import { getAllUser } from "@/app/database/User/crud";

const GET = async () => {
    const users = await getAllUser();
    console.log(users.map(user => user.name));
    return Response.json({message: "API USERS : GET", users: users.map((user) => {name: user.name, email: user.email}))};
}

const POST = () => {
    return Response.json({message: "API USERS : POST"});
}

const DELETE = () => {
    return Response.json({message: "API USERS : DELETE"});
}
const PUT = () => {
    return Response.json({message: "API USERS : PUT"}, {status: StatusCodes.OK});
}

const PATCH = () => {
    return Response.json({message: "API USERS : PATCH"});
}

export {GET, POST, DELETE, PUT, PATCH};