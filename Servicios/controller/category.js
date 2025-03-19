export class CategoryController {
  constructor({ category }) {
    this.category = category;
  }

  getAllCategories = async (req, res) => {
    try {
      const allCategories = await this.category.getAllCategories();
      res.json(allCategories);
    } catch (error) {
      console.error("Error en getAllCategories:", error);
      throw error;
    }
  };

  getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await this.category.getCategoryById({ id });
      res.json(category);
    } catch (error) {
      console.error("Error en getCategoryById:", error);
      throw error;
    }
  };

  createCategory = async (req, res) => {
    try {
      const { categoria } = req.body;
      const category = await this.category.createCategory({ categoria });
      res.json(category);
    } catch (error) {
      console.error("Error en createCategory:", error);
      throw error;
    }
  };

  updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { categoria } = req.body;
      const category = await this.category.updateCategory({ id, categoria });
      res.json(category);
    } catch (error) {
      console.error("Error en updateCategory:", error);
      throw error;
    }
  };

  deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await this.category.deleteCategory({ id });
      res.json(category);
    } catch (error) {
      console.error("Error en deleteCategory:", error);
      throw error;
    }
  };
}
