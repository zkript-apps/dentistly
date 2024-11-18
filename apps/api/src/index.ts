import express, { Application } from "express";
import cors from "cors";
import { ALLOWED_CLIENTS, PORT } from "@/common/constants/ev";
import routes from "@/routes";
import "@/common/utils/mongodb";
import "@/common/utils/redisClient";

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_CLIENTS,
    credentials: true,
  }),
);

routes(app);

app.listen(PORT, () => {
  console.log(`API Server is running at ${PORT}`);
});
