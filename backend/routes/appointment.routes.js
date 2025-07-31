import { Router } from "express";

const appointmentRouter = Router();

appointmentRouter.get("/", (req, res) => {
  res.send({title: "Get all appointments"});
});

appointmentRouter.get("/:id", (req, res) => {
  res.send({title: `Get appointment with ID: ${req.params.id}`});
});

appointmentRouter.post("/", (req, res) => {
  res.send({title: "Create a new appointment"});
});

appointmentRouter.put("/:id", (req, res) => {
  res.send({title: `Update appointment with ID: ${req.params.id}`});
});

appointmentRouter.delete("/:id", (req, res) => {
  res.send({title: `Delete appointment with ID: ${req.params.id}`});
});

export default appointmentRouter;