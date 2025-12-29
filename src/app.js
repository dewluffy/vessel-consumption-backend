import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import notFound from "./middlewares/not-found.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import vesselRoute from "./routes/vessel.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/vessels", vesselRoute);


app.use(notFound);
app.use(errorMiddleware);


export default app;
