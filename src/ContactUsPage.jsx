import { Phone, Mail, MapPin } from "lucide-react";

const ContactUsPage = () => (
  <main className="flex flex-col flex-1 min-h-[50vh] justify-center items-center py-6 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="w-full max-w-xl mx-auto p-8 bg-gray-900 rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Contact Us</h2>
      <div className="space-y-4 text-gray-300 text-center">
        <div className="flex justify-center items-center gap-2">
          <Phone className="w-5 h-5 text-blue-500" />
          <span>(xxx) xxx-xxxx</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Mail className="w-5 h-5 text-blue-500" />
          <span>info@comenterprisellc.com</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-500" />
          <span>San Antonio, TX</span>
        </div>
      </div>
      <p className="mt-8 text-gray-400 text-sm text-center">
        For business inquiries, project quotes, or more information, please email or call us. We look forward to working with you!
      </p>
    </div>
  </main>
);

export default ContactUsPage;
