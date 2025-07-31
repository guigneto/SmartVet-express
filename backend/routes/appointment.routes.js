import { Router } from "express";
import { createAppointment, deleteAppointment, getAppointment, getAppointments, updateAppointment } from "../controllers/appointment.controller.js";

const appointmentRouter = Router();

appointmentRouter.get("/", getAppointments);

appointmentRouter.get("/:id", getAppointment);

appointmentRouter.post("/", createAppointment);

appointmentRouter.put("/:id", updateAppointment);

appointmentRouter.delete("/:id", deleteAppointment);

export default appointmentRouter;