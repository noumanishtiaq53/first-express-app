import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CORS_ORIGIN } from "./config/env.js";
import { EXPRESS_PAYLOAD_LIMIT } from "./constants/express.js";

const app = express();
app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use(
  express?.json({
    limit: EXPRESS_PAYLOAD_LIMIT,
  })
);

app.use(
  express?.urlencoded({
    extended: true,
    limit: EXPRESS_PAYLOAD_LIMIT,
  })
);

app.use(express?.static("public"));

app.use(cookieParser());

export { app };
