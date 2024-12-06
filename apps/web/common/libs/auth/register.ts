import { error } from "console";
import { supabase } from "../supabase-client";
//ts-ignore
export const registerUser = async (
  name: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  const { data: organizationData, error: organizationError }: any =
    await supabase.from("Organization").insert({ name: name }).select("id");

  if (organizationData) {
    const { data: userData, error: userError } = await supabase
      .from("User")
      .insert({
        organization_id: organizationData[0].id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .select("email");

    if (!userError) {
      return { messeage: "User Successfully Registered" };
    } else {
      return userError;
    }
  }
};
