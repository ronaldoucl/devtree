import mongoose, { connection } from "mongoose"
import colors from 'colors'
import User, {IUser} from "../models/User"

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`MongoDB conectado en ${url}`));
    } catch (error) {
        console.error(colors.bgRed.white.bold("Error al conectar a MongoDB:"), error.message);
        process.exit(1);
    }
}