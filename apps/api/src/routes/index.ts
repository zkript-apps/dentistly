import { Application } from "express";
import { API_ROOT, MOCK_ROOT } from "@/common/constants";
// API
import userRoute from "./api/user";
import patientRoute from "./api/patient";
import procedureRoute from "./api/procedure";
import checkupRoute from "./api/checkup";
import appointmentRoute from "./api/appointment";
import clinicRoute from "./api/clinic";
import operationsRoute from "./api/operations";
// MOCK
import userMockRoute from "./mock/user";

export default function (app: Application) {
  // API
  app.use(`${API_ROOT}/user`, userRoute);
  app.use(`${API_ROOT}/patient`, patientRoute);
  app.use(`${API_ROOT}/procedure`, procedureRoute);
  app.use(`${API_ROOT}/checkup`, checkupRoute);
  app.use(`${API_ROOT}/appointment`, appointmentRoute);
  app.use(`${API_ROOT}/clinic`, clinicRoute);
  app.use(`${API_ROOT}/operations`, operationsRoute);
  // MOCK
  app.use(`${MOCK_ROOT}/user`, userMockRoute);
}
