import { Request, Response } from "express";
import IController from "../interface/ControllerInterface";
import Blog from "../models/Blog";

class BlogController implements IController {

    /**
     * Display a listing of the resources
     * 
     * @param req Request
     * @param res Response
     * @returns Promise<Response>
     */
    index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const blog = await Blog.find();
            return res.status(200).json(blog.reverse());
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    /**
     * Create a new blog
     * 
     * @param req Request
     * @param res Response
     * @returns Promise<Response>
     */
    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const newBlog = new Blog(req.body);

            const blog = await newBlog.save();
            return res.status(201).json(blog);

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    /**
     * Display the specified resources
     * 
     * @param req Request
     * @param res Response
     * @returns Promise<Response>
     */
    show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const blog = await Blog.findById(req.params.id);
            return res.status(200).json(blog)
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    /**
     * Update a specified resources in a storage
     * 
     * @param req Request
     * @param res Response
     * @returns Promise<Response>
     */
    update = async (req: Request, res: Response): Promise<Response> => {
        try {
            const blog = await Blog.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            );

            return res.status(200).json(blog)
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    /**
     * Remove the specified resources from storage
     * 
     * @param req Requset
     * @param res Response
     * @returns Promise<Response>
     */
    delete = async (req: Request, res: Response): Promise<Response> => {
        try {
            await Blog.findByIdAndDelete(req.params.id);
            return res.status(200).json('Blog Successfully Deleted!');
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new BlogController();