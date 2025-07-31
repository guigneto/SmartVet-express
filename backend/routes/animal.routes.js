import { Router } from "express";
import { createAnimal, getAnimal, getAnimals } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", getAnimals);

animalRouter.get("/:id", getAnimal);

animalRouter.post("/", createAnimal);

animalRouter.put("/:id", (req, res) => {
  res.send({title: `Update animal with ID: ${req.params.id}`});
});

animalRouter.delete("/:id", (req, res) => {
  res.send({title: `Delete animal with ID: ${req.params.id}`});
});

export default animalRouter;