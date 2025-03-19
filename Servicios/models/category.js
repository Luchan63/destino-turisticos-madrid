import { Model } from "objection";
import { Places } from "./places.js";
import "../db/db.js";

export class Category extends Model {
  static get tableName() {
    return "categorias";
  }

  static get relationMappings() {
    return {
      places: {
        relation: Model.HasManyRelation,
        modelClass: Places,
        join: {
          from: "categorias.id",
          to: "lugares.idCategoria",  // Corrección aquí
        },
      },
    };
  }

  static async getAllCategories() {
    try {
      return await Category.query().withGraphFetched("places");
    } catch (error) {
      console.error("Error en getAllCategories:", error);
      throw error;
    }
  }

  static async getCategoryById(id) {
    try {
      return await Category.query().findById(id).withGraphFetched("places");
    } catch (error) {
      console.error("Error en getCategoryById:", error);
      throw error;
    }
  }

  static async createCategory(category) {
    try {
      return await Category.query().insert(category);
    } catch (error) {
      console.error("Error en createCategory:", error);
      throw error;
    }
  }

  static async updateCategory(id, category) {  // Corrección del nombre
    try {
      return await Category.query().findById(id).patch(category);
    } catch (error) {
      console.error("Error en updateCategory:", error);
      throw error;
    }
  }

  static async deleteCategory(id) {
    try {
      return await Category.query().deleteById(id);
    } catch (error) {
      console.error("Error en deleteCategory:", error);
      throw error;
    }
  }
}
