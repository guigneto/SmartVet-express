import { Router } from "express";
import { createAnimal, deleteAnimal, getAnimal, getAnimals, updateAnimal } from "../controllers/animal.controller.js";

const animalRouter = Router();

animalRouter.get("/", getAnimals);

animalRouter.get("/:id", getAnimal);

animalRouter.post("/", createAnimal);

animalRouter.put("/:id", updateAnimal);

animalRouter.delete("/:id", deleteAnimal);

export default animalRouter;