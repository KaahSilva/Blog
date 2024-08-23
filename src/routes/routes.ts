import { Router } from "express"
import { authMiddleware } from "../middlewares/auth"
import { registerController } from "../controllers/registerController"
import { signinController } from "../controllers/signinController"
import { PostController } from "../controllers/postController"


// const routes = Router()
// const postController = new PostController()

// routes.post("/register",registerController)

// routes.post("/signin",signinController)

// routes.post("/post", authMiddleware, PostController.store)

// routes.get("/post", authMiddleware,)

// export{routes}



const routes = Router()
const postController = new PostController()
routes.post("/register", registerController)
routes.post("/signin", signinController)
routes.post("/post", authMiddleware, postController.store)
routes.get("/post", authMiddleware, postController.index)
export {routes}