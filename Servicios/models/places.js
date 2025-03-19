import { Model } from "objection";
import { Category } from "./category.js";
import { Multimedia } from "./multimedia.js";
import { Schedule } from "./schedule.js";
import "../db/db.js";

export class Places extends Model {
  static get tableName() {
    return "lugares";
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: "lugares.idCategoria", // Corrección aquí
          to: "categorias.id",
        },
      },
      multimedia: {
        relation: Model.HasManyRelation,
        modelClass: Multimedia,
        join: {
          from: "lugares.id",
          to: "multimedia.place_id",
        },
      },
      schedule: {
        relation: Model.HasManyRelation,
        modelClass: Schedule,
        join: {
          from: "lugares.id",
          to: "horarios.place_id",
        },
      },
    };
  }

  static async getAllPlaces() {
    try {
      return await Places.query().withGraphFetched(
        "[category, multimedia, schedule]"
      );
    } catch (error) {
      console.error("Error en getAllPlaces:", error);
      throw error;
    }
  }

  static async getPlaceById(id) {
    try {
      return await Places.query().findById(id);
    } catch (error) {
      console.error("Error en getPlaceById:", error);
      throw error;
    }
  }

  static async createPlace(data) {
    try {
      return await Places.query().insert(data);
    } catch (error) {
      console.error("Error en createPlace:", error);
      throw error;
    }
  }

  static async updatePlace(id, data) {
    try {
      return await Places.query().findById(id).patch(data);
    } catch (error) {
      console.error("Error en updatePlace:", error);
      throw error;
    }
  }

  static async deletePlace(id) {
    try {
      return await Places.query().deleteById(id);
    } catch (error) {
      console.error("Error en deletePlace:", error);
      throw error;
    }
  }
}
