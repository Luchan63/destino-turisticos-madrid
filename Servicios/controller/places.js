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
}
