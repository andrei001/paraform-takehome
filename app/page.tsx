import { FormItem, FormTypes } from "./types";
import { ApplicantForm } from "./components/ApplicantForm";
import { getSchools } from "./actions";

const form: FormItem[] = [
  {
    type: FormTypes.Text,
    placeholder: "Jane",
    id: "first_name",
    label: "First Name",
    required: true,
  },
  {
    type: FormTypes.Text,
    placeholder: "Doe",
    id: "last_name",
    label: "Last Name",
    required: true,
  },
  {
    type: FormTypes.Text,
    placeholder: "Apple",
    id: "company",
    label: "Company",
    required: false,
  },
  {
    type: FormTypes.Text,
    placeholder: "Software Engineer",
    id: "title",
    label: "Title",
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    id: "phoneNumbers",
    title: "Phone Numbers",
    subtypeOptions: ["home", "work", "mobile", "skype", "other"],
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    id: "addresses",
    title: "Addresses",
    required: false,
    subtypeOptions: ["home", "work", "other"],
  },
  {
    type: FormTypes.Dynamic,
    id: "email_addresses",
    title: "Email Addresses",
    subtypeOptions: ["personal", "work", "other"],
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    id: "website_addresses",
    title: "Website Addresses",
    subtypeOptions: ["personal", "company", "portfolio", "blog", "other"],
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    id: "social_media_addresses",
    title: "Social Media Addresses",
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    title: "Education",
    id: "educations",
    required: false,
  },
  {
    type: FormTypes.Dynamic,
    title: "Employment",
    id: "employments",
    required: false,
  },
];

export default async function Home() {
  const schools = await getSchools();

  return <ApplicantForm form={form} schools={schools ?? []} />;
}
