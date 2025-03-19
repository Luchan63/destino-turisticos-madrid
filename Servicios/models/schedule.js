import { Model } from "objection";
import "../db/db.js";
import { Places } from "./places.js";

export class Schedule extends Model {
  static get tableName() {
    return "horarios";
  }

  static get relationMappings() {
    return {
      places: {
        relation: Model.BelongsToOneRelation,
        modelClass: Places,
        join: {
          from: "horario.place_id", // Corrección aquí
          to: "lugares.id",
        },
      },
    };
  }

  static async getAllschedule() {
    try {
      const schedule = await Schedule.query();
      return schedule;
    } catch (error) {
      console.error("Error en getAllSchedule:", error);
    }
  }

  static async getscheduleById({ id }) {
    try {
      const schedule = await Schedule.query().findById(id);
      return schedule;
    } catch (error) {
      console.error("Error en getScheduleById:", error);
    }
  }

  static async createschedule(schedule) {
    try {
      const newschedule = await Schedule.query().insert(schedule);
      return newschedule;
    } catch (error) {
      console.error("Error en createSchedule:", error);
    }
  }

  static async updateSchedule({ id, schedule }) {
    try {
      const updateschedule = await Schedule.query()
        .findById(id)
        .patch(schedule);
      return updateschedule;
    } catch (error) {
      console.error("Error en updateSchedule:", error);
    }
  }

  static async deleteSchedule({ id }) {
    try {
      const deleteSchedule = await Schedule.query().deleteById(id);
      return deleteSchedule;
    } catch (error) {
      console.error("Error en deleteSchedule:", error);
    }
  }
}
