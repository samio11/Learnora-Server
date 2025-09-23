import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";
let server: Server;

async function startServer() {
  try {
    await mongoose.connect(config.database as string);
    server = app.listen(config.port, () => {
      console.log(`Server Runs at PORT 👉 ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

(async () => {
  await startServer();
})();

process.on("uncaughtException", (err) => {
  console.log(`UnCaught Exception 👉 ${err}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.log(`UnHandled Rejection 👉 ${err}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGTERM", () => {
  console.log(`Signal Termination !!!`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
