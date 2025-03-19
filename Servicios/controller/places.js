export class PlaceController {
  constructor({ place }) {
    this.place = place;
  }

  getAllPlaces = async (req, res) => {
    try {
      const allPlaces = await this.place.getAllPlaces();
      res.json(allPlaces);
    } catch (error) {
      console.error("Error en getAllPlaces:", error);
      throw error;
    }
  };

  getPlaceById = async (req, res) => {
    try {
      const { id } = req.params;
      const place = await this.place.getPlaceById({ id });
      res.json(place);
    } catch (error) {
      console.error("Error en getPlaceById:", error);
      throw error;
    }
  };

  createPlace = async (req, res) => {
    try {
      const {
        language,
        name,
        email,
        web,
        address,
        zipcode,
        country,
        latitude,
        longitude,
        subadministrativearea,
        idcategory,
      } = req.body;
      const place = await this.place.createPlace({
        language,
        name,
        email,
        web,
        address,
        zipcode,
        country,
        latitude,
        longitude,
        subadministrativearea,
        idcategory,
      });
      res.json(place);
    } catch (error) {
      console.error("Error en createPlace:", error);
      throw error;
    }
  };

  updatePlace = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        language,
        name,
        email,
        web,
        address,
        zipcode,
        country,
        latitude,
        longitude,
        subadministrativearea,
        idcategory,
      } = req.body;
      const place = await this.place.updatePlace({
        id,
        language,
        name,
        email,
        web,
        address,
        zipcode,
        country,
        latitude,
        longitude,
        subadministrativearea,
        idcategory,
      });
      res.json(place);
    } catch (error) {
      console.error("Error en updatePlace:", error);
      throw error;
    }
  };

  deletePlace = async (req, res) => {
    try {
      const { id } = req.params;
      const place = await this.place.deletePlace({ id });
      res.json(place);
    } catch (error) {
      console.error("Error en deletePlace:", error);
      throw error;
    }
  };
}
