import { DashboardClient } from "./components/dashboard-client";


async function getClinics() {
  return [
    {
      clinicName: "Harmony Dental Center",
      address: "456 Smile Street, Los Angeles",
      dayOff: [
        { day: "Saturday", timeRanges: "09:00 AM - 05:00 PM" },
        { day: "Sunday", timeRanges: "Closed" },
      ],
      createdAt: new Date("2023-11-15T09:00:00Z"),
      updatedAt: new Date("2024-02-20T14:45:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Pinnacle Health Clinic",
      address: "789 Peak Road, Denver",
      dayOff: [{ day: "Sunday", timeRanges: "Closed" }],
      createdAt: new Date("2022-08-25T11:30:00Z"),
      updatedAt: new Date("2024-05-15T10:00:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Carewell Family Clinic",
      address: "321 Kindness Blvd, New York",
      dayOff: [{ day: "Friday", timeRanges: "10:00 AM - 03:00 PM" }],
      createdAt: new Date("2021-04-12T16:00:00Z"),
      updatedAt: new Date("2024-07-10T18:20:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Green Valley Clinic",
      address: "654 Forest Lane, Seattle",
      dayOff: [
        { day: "Sunday", timeRanges: "Closed" },
        { day: "Monday", timeRanges: "09:00 AM - 12:00 PM" },
      ],
      createdAt: new Date("2020-10-03T07:45:00Z"),
      updatedAt: new Date("2024-01-12T09:15:00Z"),
      deletedAt: new Date("2024-06-01T08:00:00Z"),
    },
    {
      clinicName: "Bright Eyes Vision Center",
      address: "987 Clarity Drive, Miami",
      dayOff: [{ day: "Saturday", timeRanges: "09:00 AM - 05:00 PM" }],
      createdAt: new Date("2019-03-18T13:00:00Z"),
      updatedAt: new Date("2024-09-05T12:30:00Z"),
      deletedAt: null,
    },
  ];
}

export default async function Dashboard() {
  const clinics = await getClinics();

  return (
    <div className="p-6">
      <DashboardClient initialClinics={clinics} />
    </div>
  );
}
