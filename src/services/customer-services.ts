import bcrypt from "bcrypt";
import * as mysql from "mysql2/promise";
import { createConnection } from "../database";


export class CustomerService{

    async register(data: {name: string, email: string, password: string, address: string, phone: string}){
        const { name, email, password, address, phone}  = data;
        const connection = await createConnection();
        try {
            const createdAt = new Date();
            const hashPassword = bcrypt.hashSync(password, 10);

            const [userResult] = await connection.execute<mysql.ResultSetHeader>(
                "INSERT INTO users (name, email, password,  created_at) VALUES (?, ?, ?, ?)", [
                name, email, hashPassword, createdAt
            ]);

            const userId = userResult.insertId;
            const [costumerResult] = await connection.execute<mysql.ResultSetHeader>(
                "INSERT INTO customers (user_id, address, phone, created_at) VALUES (?, ?, ?, ?)", [
                userId, address, phone, createdAt
            ] );

            return{
                id: costumerResult.insertId, 
                userId, 
                address, 
                phone, 
                createdAt};
            
        } finally {
        await connection.end();
        }
    }
}