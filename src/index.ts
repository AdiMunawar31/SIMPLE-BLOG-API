import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import BlogRoutes from './routes/BlogRoutes';
import connectDB from './config/db';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        dotenv.config();
        this.plugins();
        this.routes();

        // Coneect to database
        connectDB();
    }

    protected plugins(): void {
        // Get Body Request JSON
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Logger with morgan
        this.app.use(morgan('dev'));
    }

    protected routes(): void {
        this.app.use('/api/blogs', BlogRoutes);
    }
}


const app = new App().app;
app.listen(process.env.PORT, () => console.log(`Server is Running in http://localhost:${process.env.PORT}`)
)