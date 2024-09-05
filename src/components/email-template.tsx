import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  company: string;
  email: string;
  message: string;
  categories: any;
  budget_category: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  company,
  email,
  message,
  categories,
  budget_category,
}) => (
  <div>
    <h1>New Contact Entry</h1>
    <p>Name: {name}</p>
    <p>Company: {company}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
    <p>Categories: {categories}</p>
    <p>Budget Category: {budget_category}</p>
  </div>
);
