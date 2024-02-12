// models/emailModel.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Email extends Model {
    public id!: number;
    public email!: string;
}

Email.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        tableName: 'emails', // Ajusta el nombre de la tabla según tus necesidades
        sequelize,
    }
);

export default Email;
