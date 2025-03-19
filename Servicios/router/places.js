import express from "express";
import { PlaceController } from "../controller/places.js";

export const RouterPlacer = ({ place }) => {
  const router = express.Router();
  const placesController = new PlaceController({ place });

  router.get("/", placesController.getAllPlaces);

  return router;
};
