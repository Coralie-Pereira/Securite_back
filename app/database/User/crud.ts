import { prismaClient } from "../global";

export async function createUser(name : string, email : string, phone_number : string, role_id: number) {
    const newUser = await prismaClient.user.create({
        data: {
            name: name,
            email: email,
            phone_number: phone_number,
            role_id: role_id,
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

export async function updateUser(id : number) {
    const updatedUser = await prismaClient.user.update({
        where: {
            id_user: id
        },
        data: {
            birthday: new Date()
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

