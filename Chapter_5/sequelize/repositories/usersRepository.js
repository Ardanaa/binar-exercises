const generator = require("../utils/generator");

class UsersRepository {
    static async getAll({ title }) {
        if (title) {
            const filterUsersByQuery = UsersData.filter((a) => {
                if (a.title == title) {
                    return title;
                }
            });

            UsersData = filterUsersByQuery;
        }

        return UsersData;
    }

    static async getById({
        id
    }) {
        const filterUsersById = UsersData.filter((b) => {
            if (b.id == id) {
                return id;
            }
        });
        return filterUsersById;
    }

    static async deleteById({ id }) {
        let deletedUser = {};
        const filteredUsers = UsersData.filter((b) => {
            if (b.id == id) {

                deletedUser = {
                    id: b.id,
                    title: b.title,
                    author: b.author,
                    price: b.price
                };
            } else {
                return b;
            }
        });

        UsersData = filteredUsers;
        return deletedUser;
    }

    static async updateById({ id, title, author, price }) {
        let updatedUsers = {};
        const updateUsers = UsersData.filter((c) => {
            if (c.id == id) {
                c.title = title;
                c.author = author;
                c.price = price;

                updatedUsers = {
                    id: c.id,
                    title: c.title,
                    author: c.author,
                    price: c.price
                }
            }
            return c;
        });
        UsersData = updateUsers
        return updatedUsers
    }

    static async create({
        title,
        author,
        price
    }) {
        const generatedID = await generator.generateID();

        UsersData.push({
            id: generatedID,
            title,
            author,
            price
        });

        return {
            id: generatedID,
            title,
            author,
            price
        };
    }
}

module.exports = UsersRepository;