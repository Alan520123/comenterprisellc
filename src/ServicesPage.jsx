import {
  Building,
  Hammer,
  HardHat,
  Wrench,
  Award,
  Shield,
  Users,
} from "lucide-react";

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      id: 1,
      title: "Commercial Construction",
      description:
        "Quality commercial construction projects including office buildings, retail spaces, and industrial facilities with superior workmanship and project management.",
      icon: Building,
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Renovations & Remodeling",
      description:
        "Comprehensive renovation and remodeling services for existing commercial and industrial properties with focus on quality and efficiency.",
      icon: Hammer,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Infrastructure Development",
      description:
        "Responsible infrastructure development and additions to Texas communities through expert planning and execution.",
      icon: HardHat,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Project Management",
      description:
        "High-performing project management services ensuring timely completion within budget while maintaining superior quality standards.",
      icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive construction solutions for Texas communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose COM Enterprise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Superior Quality
              </h3>
              <p className="text-gray-600">
                Uncompromising quality in every project we undertake
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Safety Focused
              </h3>
              <p className="text-gray-600">
                Proactive safety measures and OSHA compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Committed to serving Texas communities responsibly
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-6">
              Contact us today for a consultation and let's build something
              great together.
            </p>
            <button
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              onClick={() => setCurrentPage && setCurrentPage('contactUs')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
