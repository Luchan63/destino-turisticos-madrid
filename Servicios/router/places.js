import express from "express";
import { PlaceController } from "../controller/places.js";

export const RouterPlacer = ({ place }) => {
  const router = express.Router();
  const placesController = new PlaceController({ place });

  router.get("/", placesController.getAllPlaces);
  router.get("/:id", placesController.getPlaceById);
  router.post("/", placesController.createPlace);
  router.patch("/:id", placesController.updatePlace);
  router.delete("/:id", placesController.deletePlace);
  return router;
};
