import { Request, Response } from "express"
import permission from "../../models/permission"
import { UNKNOWN_ERROR_OCCURRED } from "../../utils/constants"


export const getAllPermission = async (req: Request, res: Response) => {
    try {
        const permissionCount = await permission.find().countDocuments()
        // Update or add to the populate array collections if needed - (['clinic])
        const getAllPermission = await permission.find().populate(['clinic']).sort({ createdAt: -1})
        res.json({
            items: getAllPermission,
            count: permissionCount
        })
    } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.status(500).json(message)
    }
}