import express, { Application } from "express";
import cors from "cors";
import { origins, port } from "./common/config";
import routes from "./routes";
import "./common/utils/mongodb";

const app: Application = express();
app.use(express.json());
app.use(
	cors({
		origin: origins,
		credentials: true,
	})
);

routes(app);

app.listen(port, () => {
	console.log(`API Server is running at ${port}`);
});
