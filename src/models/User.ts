import {Model, DataTypes} from "sequelize"
import sequelize from "@/db_connection"

class User extends Model{
    declare id: number
    declare name: string
    declare prefered_name: string | null
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
        prefered_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    },
    {
        tableName: "users",
        sequelize,
        createdAt: "createdAt",
        updatedAt: "updateAt"
    }
)

export default User