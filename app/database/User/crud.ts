import { PRISMA_CLIENT } from "../global";

export const getUser = async () => {
    const allUsers = await PRISMA_CLIENT.user.findMany();
    return allUsers;
}


// export const getUserById = async () => {
//     if (!cookiesStore.get("user")) return;
//     const user = await prisma.user.findFirst({
//       where: {
//         id: parseInt(cookiesStore.get("user").value),
//       },
//     });
//     return user;
//   };