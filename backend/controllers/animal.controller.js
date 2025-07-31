import Animal from '../models/animal.model.js';

export const getAnimals = async (req, res, next) => {
    try {
        const animals = await Animal.find();
        res.status(200).json({
            success: true,
            data: animals
        });
    } catch (error) {
        next(error);
    }
}

export const getAnimal = async (req, res, next) => {
    try {
        const animal = await Animal.findById(req.params.id);

        if (!animal) {
            const error = new Error("Animal not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: animal
        });
    } catch (error) {
        next(error);
    }
}

export const createAnimal = async (req, res, next) => {
    try{
        const {name, species, breed, birthYear, weight} = req.body;

        const newAnimal = await Animal.create({name, species, breed, birthYear, weight})

        res.status(201).json({
            success: true,
            message: 'Animal created successfully',
            data: newAnimal
        });

    }catch(error){
        next(error)
    }
    
}

export const updateAnimal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, species, breed, birthYear, weight } = req.body;

        const updatedAnimal = await Animal.findByIdAndUpdate(
            id,
            { name, species, breed, birthYear, weight },
            { new: true }
        );

        if (!updatedAnimal) {
            const error = new Error("Animal not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: "Animal updated successfully",
            data: updatedAnimal
        });
    } catch (error) {
        next(error);
    }
}
export const deleteAnimal = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedAnimal = await Animal.findByIdAndDelete(id);

        if (!deletedAnimal) {
            const error = new Error("Animal not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: "Animal deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}