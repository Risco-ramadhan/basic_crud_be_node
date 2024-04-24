import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import AccessImg from "./config/AccessImg.js";

const app = express();
app.use(AccessImg);
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(3000, () => console.log("Server Up and Running..."));
