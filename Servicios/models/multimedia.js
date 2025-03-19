import { Model } from "objection";
import { Places } from "./places.js";
import "../db/db.js";

export class Multimedia extends Model {
  static get tableName() {
    return "multimedia";
  }

  static get relationMappings() {
    return {
      places: {
        relation: Model.BelongsToOneRelation,
        modelClass: Places,
        join: {
          from: "multimedia.place_id",
          to: "lugares.id",
        },
      },
    };
  }

  static async getAllMultimedia() {
    try {
      const multimedia = await Multimedia.query();
      return multimedia;
    } catch (error) {
      console.error("Error en getAllPlaces:", error);
    }
  }

  static async getMultimediaById({ id }) {
    try {
      const multimedia = await Multimedia.query().findById(id);
      return multimedia;
    } catch (error) {
      console.error("Error en getPlaceById:", error);
    }
  }

  static async createMultimedia(multimedia) {
    try {
      const newMultimedia = await Multimedia.query().insert(multimedia);
      return newMultimedia;
    } catch (error) {
      console.error("Error en createPlace:", error);
    }
  }

  static async updateMultimedia({ id, multimedia }) {
    try {
      const updateMultimedia = await Multimedia.query()
        .findById(id)
        .patch(multimedia);
      return updateMultimedia;
    } catch (error) {
      console.error("Error en updatePlace:", error);
    }
  }

  static async deleteMultimedia({ id }) {
    try {
      const deleteMutimedia = await Multimedia.query().deleteById(id);
      return deleteMutimedia;
    } catch (error) {
      console.error("Error en deletePlace:", error);
    }
  }
}
