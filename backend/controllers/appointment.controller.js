import Appointment from "../models/appointment.model.js";
import Animal from "../models/animal.model.js";

export const getAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find()
        res.status(200).json({
            success: true,
            data: appointments
        });
    } catch (error) {
        next(error);
    }
}

export const getAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id)

        if (!appointment) {
            const error = new Error("Appointment not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: appointment
        });
    } catch (error) {
        next(error);
    }
}

export const createAppointment = async (req, res, next) => {
    try{
        const { date, urgency, description, animalId } = req.body;

        const animalExists = await Animal.findById(animalId);
        if (!animalExists) {
            return res.status(404).json({ success: false, message: "Animal not found" });   
        }

        const parsedDate = new Date(date);

        const newAppointment = await Appointment.create({ date: parsedDate, urgency, description, animalId });

        res.status(201).json({
            success: true,
            data: newAppointment
        });
    }catch(error){
        next(error);
    }
}

export const updateAppointment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { date, urgency, description, animalId } = req.body;

        const animalExists = await Animal.findById(animalId);
        if (!animalExists) {
            return res.status(404).json({ success: false, message: "Animal not found" });
        }

        const parsedDate = new Date(date);

        const updatedAppointment = await Appointment.findByIdAndUpdate(id, {
            date: parsedDate,
            urgency,
            description,
            animalId
        }, { new: true });

        if (!updatedAppointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        res.status(200).json({
            success: true,
            message: "Appointment updated successfully",
            data: updatedAppointment
        });
    } catch (error) {
        next(error);
    }
}

export const deleteAppointment = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedAppointment = await Appointment.findByIdAndDelete(id);

        if (!deletedAppointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }

        res.status(200).json({
            success: true,
            message: "Appointment deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}