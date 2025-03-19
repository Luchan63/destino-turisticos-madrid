import express from "express";
import { Places } from "../models/places.js";
import { Category } from "../models/category.js";
import { Multimedia } from "../models/multimedia.js";
import { Schedule } from "../models/schedule.js";
import { RouterPlacer } from "../router/places.js";
import { RouterCategory } from "../router/category.js";
import { RouterMultimedia } from "../router/multimedia.js";
import { RouterSchedule } from "../router/schedule.js";

const PORT = 8001;

export const createApp = ({ place, category, multimedia, schedule }) => {
  const app = express();

  app.disabled("x-powered-by");

  app.use(express.json());

  app.use("/places", RouterPlacer({ place }));
  app.use("/categories", RouterCategory({ category }));
  app.use("/multimedia", RouterMultimedia({ multimedia }));
  app.use("/schedule", RouterSchedule({ schedule }));

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });

  return app;
};

createApp({
  place: Places,
  category: Category,
  multimedia: Multimedia,
  schedule: Schedule,
});
