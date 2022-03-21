import BlogController from "../controllers/BlogController";
import BaseRoutes from "../helpers/BaseRoutes";

class BlogRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', BlogController.index);
        this.router.post('/', BlogController.create);
        this.router.get('/:id', BlogController.show);
        this.router.put('/:id', BlogController.update);
        this.router.delete('/:id', BlogController.delete);
    }
}

export default new BlogRoutes().router;