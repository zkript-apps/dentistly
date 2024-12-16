import { supabase } from "../supabase-client";

type T_Day_OFF = {
  day: string;
  fromTime: string;
  toTime: string;
};

export const addClinic = async (
  organizationId: number,
  clinicName: string,
  address: string,
  dayoff: Array<T_Day_OFF>
) => {
  // Check if the clinic already exists
  const { data: existingClinic, error: clinicCheckError } = await supabase
    .from("Clinic")
    .select("id")
    .eq("clinic_name", clinicName.toLowerCase())
    .single()

  if (clinicCheckError && clinicCheckError.code !== 'PGRST116') {
    console.error("Error checking clinic existence:", clinicCheckError);
    return {
      success: false,
      message: "Error checking clinic existence",
      error: clinicCheckError.message,
    };
  }

  if (existingClinic) {
    return {
      success: false,
      message: "Clinic already exists",
    };
  }

  // Insert the new clinic
  const { data: clinicData, error: clinicError } = await supabase
    .from("Clinic")
    .insert({
      clinic_name: clinicName.toLowerCase(),
      address: address,
      dayoff: JSON.stringify(dayoff),
      organization_id: organizationId,
    })
    .select("id")

  if (clinicError) {
    console.error("Error adding clinic:", clinicError.message, clinicError.details);
    return {
      success: false,
      message: "Error adding clinic",
      error: clinicError.message,
    };
  }

  return {
    success: true,
    message: "Clinic successfully added",
    clinic: clinicData,
  };
};