const UsersRepository = require("../repositories/UsersRepository");

class UsersService {
    static async getAll({ title }) {
        // Manggil repo get all Users
        const getUsers = await UsersRepository.getAll({ title });

        return getUsers;
    }

    static async getById({
        id
    }) {
        // Manggil repo get by id Users
        const filterUsersById = await UsersRepository.getById({
            id
        });

        return filterUsersById;
    }

    static async updateById({ id, title, author, price }) {
        // Manggil repo get by id Users
        const updateUsersById = await UsersRepository.updateById({ id, title, author, price });

        return updateUsersById;
    }

    static async deleteById({
        id
    }) {
        // Manggil repo get by id Users 
        const deleteUsersById = await UsersRepository.deleteById({
            id
        });

        return deleteUsersById;
    }

    static async create({
        title,
        author,
        price
    }) {
        const createdUser = await UsersRepository.create({
            title,
            author,
            price,
        });

        return createdUser;
    }
}

module.exports = UsersService;