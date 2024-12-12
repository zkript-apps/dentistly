import { EmailTemplate } from "@/module/Member/components/email-template";
import { render } from "@react-email/components";
import { Html } from "next/document";
const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

interface EmailTemplateProps {
  email: string;
  subject: string;
  body: string;
}

export const sendEmail = async (props: EmailTemplateProps) => {
  const emailHtml = render(<EmailTemplate {...props} />);
  const msg = {
    To: props.email,
    From: "Dentistly <john@zkript.dev>",
    Subject: props.subject,
    HtmlBody: await emailHtml,
  };
  client.sendEmail(msg);
};

export { client };
