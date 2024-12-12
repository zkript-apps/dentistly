import * as React from "react";

type T_EMAIL_TEMPLATE = {
  email: string;
  subject: string;
  body: string;
};

export const EmailTemplate = ({ email, subject, body }: T_EMAIL_TEMPLATE) => (
  <div>
    {email && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Email:</span> {email}
      </h3>
    )}
    {subject && (
      <h4>
        <span style={{ fontWeight: "normal" }}>Subject:</span> {subject}
      </h4>
    )}
    {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
  </div>
);
