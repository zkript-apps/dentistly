import { Request, Response } from "express";
import checkup from "../../models/checkup";
import { UNKNOWN_ERROR_OCCURRED, REQUIRED_VALUE_EMPTY } from "../../common/utils/constants";
import patient from "../../models/patient";
import procedure from "../../models/procedure";

export const getAllCheckup = async (req: Request, res: Response) => {
    try {
        const checkupCount = await checkup.find().countDocuments()
        const getAllCheckup = await checkup.find({deletedAt: null}).populate([
            {
                path: 'patient',
            },
            'procedure', 'clinic',
            
        ]).sort({
            createdAt: -1
        })
        if(getAllCheckup) {
            res.json({
                items: getAllCheckup,
                count: checkupCount,
            })
        } else {
            throw new Error('No records found for checkup')
        }
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message)
    }
}

export const getCheckup = async (req: Request, res: Response) => {
    try {
        const getCheckup = await checkup.findOne({ _id: req.params.id, deletedAt: null}).populate([
            {
                path: 'patient',
            },
            'procedure', 'clinic',
        ])
        if(getCheckup) {
            res.json({
                item: getCheckup,
            })
        } else {
            throw new Error('Checkup record not found!')
        }
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message)
    }
}

export const addCheckup = async (req: Request, res: Response) => {
    const { 
        clinicId,
        patientId, 
        procedureId, 
        cost, 
        paymentStatus, 
        findings 
    } = req.body

    if (clinicId && patientId && procedureId && cost && paymentStatus && findings) {
        const newCheckup = new checkup({ 
            clinic: clinicId,
            patient: patientId,  
            procedure: procedureId,  
            cost, 
            paymentStatus, 
            findings, 
            updatedAt: null, 
            deletedAt: null,
        });

        try {
            const createTransactionRequest = await newCheckup.save();
            res.json({
                data: createTransactionRequest,
            });
        } catch (err: any) {
            const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED;
            res.json(message);
        }
    } else {
        res.status(400).json(REQUIRED_VALUE_EMPTY);
    }
}

export const updateCheckup = async (req: Request, res: Response) => {
    const getCheckup = await checkup.find({
        _id: req.params.id,
        deletedAt: { $exists: false},
    })
    if (getCheckup.length === 0) {
        try {
            const updateCheckup = await checkup.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                    updatedAt: Date.now(),
                },
                { new: true }
            )
            res.json(updateCheckup)
        } catch (err: any) {
            const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
            res.json(message)
        }
    } else {
        res.status(400).json('checkup record does not exists')
    }
}

export const deleteCheckup = async (req: Request, res: Response) => {
    try {
        const getCheckup = await checkup.findOne({ _id: req.params.id, deletedAt: null}).populate([
            {
                path: 'patient',
                select: '-user',
            },
            'procedure',
        ])
            if (getCheckup) {
                const deleteCheckup = await checkup.findByIdAndUpdate(req.params.id, {
                    $set: {
                        deletedAt: Date.now(),
                    },
                });
                if (getCheckup.patient && getCheckup.procedure) {
                    await Promise.all([
                        patient.findByIdAndUpdate(getCheckup.patient, { 
                            $set: { deletedAt: Date.now() } 
                        }),
                        procedure.findByIdAndUpdate(getCheckup.procedure, { 
                            $set: { deletedAt: Date.now() } 
                        }),
                    ]);
                    res.json(deleteCheckup);
                } else {
                    throw new Error('Checkup record is already deleted!');
                }
            }
    }  catch (err: any) {
               const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
               res.status(500).json(message) 
    }
};
