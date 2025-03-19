export class ScheduleController {
  constructor({ schedule }) {
    this.schedule = schedule;
  }

  getAllSchedules = async (req, res) => {
    try {
      const allSchedule = await this.schedule.getAllschedule();
      res.json(allSchedule);
    } catch (error) {
      console.error("Error en getAllSchedule:", error);
      throw error;
    }
  };

  getScheduleById = async (req, res) => {
    try {
      const { id } = req.params;
      const schedule = await this.schedule.getscheduleById({ id });
      res.json(schedule);
    } catch (error) {
      console.error("Error en getScheduleById:", error);
      throw error;
    }
  };

  createSchedule = async (req, res) => {
    try {
      const result = req.body;
      const schedule = await this.schedule.createschedule({
        schedule: result.data,
      });
      res.json(schedule);
    } catch (error) {
      console.error("Error en createSchedule:", error);
      throw error;
    }
  };

  updateSchedule = async (req, res) => {
    try {
      const { id } = req.params;
      const result = req.body;
      const updatedSchedule = await this.schedule.updateSchedule({
        id,
        schedule: result.data,
      });
      res.json(updatedSchedule);
    } catch (error) {
      console.error("Error en updateSchedule:", error);
      throw error;
    }
  };

  deleteSchedule = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedSchedule = await this.schedule.deleteSchedule({ id });
      res.json(deletedSchedule);
    } catch (error) {
      console.error("Error en deleteSchedule:", error);
      throw error;
    }
  };
}
