import { Phone, Mail, MapPin } from "lucide-react";
import logo from "./Assets/Logo-backgroundremoved.png";

const Footer = ({ setCurrentPage }) => {
  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contactUs", label: "Contact Us" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="COM Enterprise Logo"
                className="w-8 h-8 mr-2"
                style={{ maxWidth: '32px', maxHeight: '32px' }}
              />
              <h3 className="text-2xl font-bold text-blue-400 m-0 p-0">
                COM ENTERPRISE, LLC
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              A commercial and industrial construction builder dedicated to
              servicing Texas infrastructure responsibly through quality
              renovations, remodeling, and additions.
            </p>
            <p className="text-gray-400 italic">
              "To build the commercial pillars of tomorrow today"
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>Contact for details</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@comenterprisellc.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Texas, USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 COM Enterprise, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
