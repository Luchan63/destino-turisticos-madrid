export class MultimediaController {
  constructor({ multimedia }) {
    this.multimedia = multimedia;
  }

  getAllMultimedia = async (req, res) => {
    try {
      const allMultimedia = await this.multimedia.getAllMultimedia();
      res.json(allMultimedia);
    } catch (error) {
      console.error("Error en getAllMultimedia:", error);
      throw error;
    }
  };

  getMultimediaById = async (req, res) => {
    try {
      const { id } = req.params;
      const multimedia = await this.multimedia.getMultimediaById({ id });
      res.json(multimedia);
    } catch (error) {
      console.error("Error en getMultimediaById:", error);
      throw error;
    }
  };

  createMultimedia = async (req, res) => {
    try {
      const result = req.body;
      const multimedia = await this.multimedia.createMultimedia({
        multimedia: result.data,
      });
      res.json(multimedia);
    } catch (error) {
      console.error("Error en createMultimedia:", error);
      throw error;
    }
  };

  updateMultimedia = async (req, res) => {
    try {
      const { id } = req.params;
      const result = req.body;
      const multimedia = await this.multimedia.updateMultimedia({
        id,
        multimedia: result.data,
      });
      res.json(multimedia);
    } catch (error) {
      console.error("Error en updateMultimedia:", error);
      throw error;
    }
  };

  deleteMultimedia = async (req, res) => {
    try {
      const { id } = req.params;
      const multimedia = await this.multimedia.deleteMultimedia({ id });
      res.json(multimedia);
    } catch (error) {
      console.error("Error en deleteMultimedia:", error);
      throw error;
    }
  };
}
