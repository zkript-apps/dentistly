import { Application } from "express";
import { API_ROOT } from "../common/utils/constants"
import userRoute from './user'
import patientRoute from './patient'
import procedureRoute from './procedure'
import checkupRoute from './checkup'
import appointmentRoute from './appointment'
import clinicRoute from './clinic'
import operationsRoute from './operations'



export default function (app: Application) {
    app.use(`${API_ROOT}/user`, userRoute)
    app.use(`${API_ROOT}/patient`, patientRoute)
    app.use(`${API_ROOT}/procedure`, procedureRoute)
    app.use(`${API_ROOT}/checkup`, checkupRoute)
    app.use(`${API_ROOT}/appointment`, appointmentRoute)
    app.use(`${API_ROOT}/clinic`, clinicRoute)
    app.use(`${API_ROOT}/operations`, operationsRoute)
}

