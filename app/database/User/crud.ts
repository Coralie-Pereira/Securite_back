import { UserInterface } from "@/models/User";
import { prismaClient } from "../global";

export async function createUser(user : UserInterface) {
    const newUser = await prismaClient.user.create({
        data: {
            name: user.name,
            email: user.email,
            phone_number: user.phone_number,
            role_id: user.role_id,
        }
    });
    console.log('User created:', newUser);
};

export async function getUser(id : number) {
    const user = await prismaClient.user.findUnique({
        where: {
            id_user: id
        }
    });
    console.log('User:', user);
    return user;
};

export async function getAllUser() {
    const users = await prismaClient.user.findMany();
    console.log('Users:', users);
    return users;
};

export async function updateUser(id : number, user: UserInterface) {
    const updatedUser = await prismaClient.user.update({
        where: {
            id_user: id
        },
        data: {
            name: user.name,
            email: user.email,
            phone_number: user.phone_number,
            birthday: user.birthday,
            role_id: user.role_id,
            updated_at: new Date(),
            created_at: user.created_at
        }
    });
    console.log('User updated:', updatedUser);
};

export async function deleteUser(id : number) {
    const deletedUser = await prismaClient.user.delete({
        where: {
            id_user: id
        }
    });
    console.log('User deleted:', deletedUser);
};

