import ContactForm from "@/components/contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us - Paphos Sea Cruises",
  description: "Get in touch with us for any inquiries or bookings. We are here to help you!",
}


export default function Contact() {
  return (
    <div className="">
      <ContactForm />
    </div>
  );
}
