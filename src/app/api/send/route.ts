import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_gUdSi6GK_9GjCi2Aaqtbj12rSDPQ6yWJ6");

export async function POST(request: Request) {
  const categorys = [
    { id: "branding", title: "Branding" },
    { id: "web_design", title: "Web Design" },
    { id: "app_design", title: "App Design" },
    { id: "logo", title: "Logo" },
    { id: "digital_marketing", title: "Digital Marketing" },
    { id: "android_development", title: "Android Development" },
    { id: "iso_development", title: "iOS Development" },
    { id: "design_concept", title: "Design Concept" },
    { id: "other", title: "Other" },
  ];
  try {
    const body = await request.json();
    let selectedCategories = "";
    for (let i = 0; i < body.categories.length; i++) {
      selectedCategories += categorys[body.categories[i]].title + ", ";
    }
    const { data, error } = await resend.emails.send({
      from: "Elco Dev <onboarding@resend.dev>",
      to: ["austin@elcodev.com"],
      subject: "Contact Form Entry",
      react: EmailTemplate({
        name: body.name,
        company: body.company,
        email: body.email,
        message: body.message,
        categories: selectedCategories,
        budget_category: body.budget_category,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
