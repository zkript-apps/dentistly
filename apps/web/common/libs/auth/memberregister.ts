import { error } from "console";
import { supabase } from "../supabase-client";
//ts-ignore
export const memberRegisterUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  // const { data: authData, error: authError} = await supabase.auth.signUp ({
  //   email,
  //   password,
  //   options: {
  //     data: {
  //       first_name: firstName,
  //       last_name: lastName
  //     }
  //   }
  // })
  // if (authError) {
  //   return authError
  // }
  

// Check if the email already exists
const { data: existingUser, error: userCheckError } = await supabase
.from("User")
.select("email")
.eq("email", email)
.maybeSingle(); // Use maybeSingle() to return null if no match is found

if (userCheckError) {
return { message: "Error checking email existence", error: userCheckError };
}

if (existingUser) {
return { message: "Email already exists" };
}

// Insert the new organization
const { data: organizationData, error: organizationError }: any =
await supabase.from("Organization").insert({ name: name }).select("id");

if (organizationError) {
return { message: "Error creating organization", error: organizationError };
}

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

if (userError) {
  return { message: "Error creating user", error: userError };
}

return { message: "User Successfully Registered" };
}

return { message: "Unknown error occurred" };
};