import express from "express";
import { RouterPlacer } from "../router/places.js";
import { Places } from "../models/places.js";

const PORT = 8001;

export const createApp = ({ place }) => {
  const app = express();

  app.disabled("x-powered-by");

  app.use(express.json());

  app.use("/places", RouterPlacer({ place }));

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });

  return app;
};

createApp({ place: Places });
