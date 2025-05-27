import express, { Express, Request, Response} from "express";
import authRouter from "./routes/auth.route";
import limiter from "./middlewares.rateLimiter.middleware";

const srever: Express = express();

server.use(express.json());
server.use(limiter);


server.use("/api/v1/auth", authRouter);

server.get("/api/v1/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "welcome" });
});

export default server;
