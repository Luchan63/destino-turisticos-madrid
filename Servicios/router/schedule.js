import express from "express";
import { ScheduleController } from "../controller/schedule.js";

export const RouterSchedule = ({ schedule }) => {
  const router = express.Router();
  const scheduleController = new ScheduleController({ schedule });

  router.get("/", scheduleController.getAllSchedules);
  router.get("/:id", scheduleController.getScheduleById);
  router.post("/", scheduleController.createSchedule);
  router.patch("/:id", scheduleController.updateSchedule);
  router.delete("/:id", scheduleController.deleteSchedule);
  return router;
};
