import express from "express";
import { MultimediaController } from "../controller/multimedia.js";

export const RouterMultimedia = ({ multimedia }) => {
  const router = express.Router();
  const multimediaController = new MultimediaController({ multimedia });

  router.get("/", multimediaController.getAllMultimedia);
  router.get("/:id", multimediaController.getMultimediaById);
  router.post("/", multimediaController.createMultimedia);
  router.patch("/:id", multimediaController.updateMultimedia);
  router.delete("/:id", multimediaController.deleteMultimedia);
  return router;
};
