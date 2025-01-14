import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ResponseClient } from "./src/middlewares/ResponseClient.js";
import { errorHandler } from "./src/middlewares/ErrorHandler.js";
import { Mongo_Db_Connection } from "./src/config/mongoConfig.js";
import { AuthRoute } from "./src/routes/UserRouter.js";
import { ProductRoute } from "./src/routes/ProductRouter.js";
import { CategoryRoute } from "./src/routes/CategoryRouter.js";

const app = express();
const PORT = 8000;

//Database connection with MongoDb
Mongo_Db_Connection();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/auth", AuthRoute);
app.use ("/api/v1/product", ProductRoute)
app.use("/api/v1/category", CategoryRoute)

app.get("/", (req, res) => {
  const message = "Server is Live";
  ResponseClient({ req, res, message });
});

app.use(errorHandler);

app.listen(PORT, (error) => {
  error
    ? console.log("Server not connected")
    : console.log(`Server connected at http://localhost:${PORT}`);
});
