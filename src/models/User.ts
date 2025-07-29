import {Model, DataTypes} from "sequelize"
import sequelize from "@/db_connection"

class User extends Model{
    declare id: number
    declare name: string
    declare email: string | null
    declare createdAt: Date
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    },
    {
        tableName: "users",
        sequelize,
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
)

export default User