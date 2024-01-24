import { Request, Response } from "express";
import appointment from "../../models/appointment";
import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED } from "../../common/utils/constants";
import procedure from "../../models/procedure";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointmentCount =  await appointment.find().countDocuments()
        const getAllAppointments = await appointment.find({deletedAt: null}).populate(['procedure', 'clinic']).sort({
            createdAt: -1
        })
        if (getAllAppointments) {
            res.json({
                items: getAllAppointments,
                count: appointmentCount
            })
        } else {
            throw new Error('No appointment schedule found!')
        }
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message)
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const getAppointment = await appointment.findOne({ _id: req.params.id, deletedAt: null}).populate(['procedure','clinic'])
        if (getAppointment) {
            res.json({
                item: getAppointment,
            })
        } else {
            throw new Error('Appointment not found')
        }
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message)
    }
};

export const addAppointment = async (req: Request, res: Response) => {
    const { clinicId, procedureId, lastName, firstName, middleName, email,
        contactNumber, date, time, declineReason } = req.body;
    if ( clinicId && procedureId &&lastName && firstName && middleName || 
        email && contactNumber && date && time || declineReason) {
        try {
            
            const existingSchedule = await appointment.findOne({
                date,
                time,
                deletedAt: null,
            });

            if (existingSchedule) {
                throw new Error('Appoint schedule is already taken')
            } else {
                const newAppointment = new appointment({ clinic: clinicId, procedure: procedureId, lastName, firstName, middleName, 
                    email, contactNumber, date, time, status: 'Pending', declineReason, updatedAt: null, deletedAt: null
                });

                const createTransactionRequest = await newAppointment.save();
                res.json({
                    data: createTransactionRequest,
                });
            }
        } catch (err: any) {
            const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
            res.status(500).json({ message });
        }
    } else {
        res.status(400).json(REQUIRED_VALUE_EMPTY);
    }
};

export const updateAppointment = async (req: Request, res: Response) => {
    const getAppointment = await appointment.find({_id: req.params.id, deletedAt: { $exists: false },
    })
    if(getAppointment.length === 0) {
        try {
            const updateAppointment = await appointment.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                    updatedAt: Date.now(),
                },
                { new: true }
            )
            res.json(updateAppointment)
        } catch (err: any) {
            const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
            res.json(message)
        }
    } else {
        res.status(400).json('appointment record does not exists')
    }
};

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const getAppointment = await appointment.findOne({
            _id: req.params.id,
            deletedAt: null
        }).populate('procedure')
        if (getAppointment) {
            const deleteAppointment = await appointment.findByIdAndUpdate(req.params.id, {
                $set: {
                    deletedAt: Date.now(),
                },
            });
            if (getAppointment.procedure) {
                await procedure.findByIdAndUpdate(getAppointment.procedure, {
                    $set: {
                        deletedAt: Date.now(),
                    },
                });
            }
            res.json(deleteAppointment)
        } else {
            throw new Error('Appointment is aleardy deleted!')
        }
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message);
    }
};

export const updateAppointmentStatus = async (req: Request, res: Response) => {
    try {
        const getAppointment = await appointment.findById(req.params.id);

        if (!getAppointment) {
            return res.status(404).json('Appointment not found');
        }

        const { status } = req.body;

        if (!status || !['Pending', 'Approved', 'Declined'].includes(status)) {
            return res.status(400).json('Invalid status provided');
        }

        const updateAppointment = await appointment.findByIdAndUpdate(
            req.params.id,
            {
                $set: { status, updatedAt: Date.now() },
            },
            { new: true }
        );

        res.json(updateAppointment);
    } catch (err: any) {
        const message = err.message ? err.message : 'Unknown error occurred';
        res.status(500).json(message);
    }
};
