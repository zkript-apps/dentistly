import { sendEmail } from "@/common/helpers/send-email";

export async function POST(req: Request) {
  try {
    const { email, subject, body } = await req.json();

    console.log({ email, subject, body });
    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    await sendEmail({ email, subject, body });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
