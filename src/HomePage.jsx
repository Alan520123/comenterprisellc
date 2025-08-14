import React from "react";
import { ChevronRight, Award, Shield, Users } from "lucide-react";

const HomePage = ({ setCurrentPage }) => {
  const coreValues = [
    {
      title: "Quality",
      description:
        "Quality is not a negotiable part of our business. We pledge to provide superior quality in workmanship, supervision, and project completion within budget.",
      icon: Award,
    },
    {
      title: "Safety",
      description:
        "COM Enterprise team handles hazards of demolition work. We minimize risk by always placing safety first with proper training and OSHA compliance.",
      icon: Shield,
    },
    {
      title: "Community",
      description:
        "COM Enterprise believes in engaging with our communities and is grounded and focused on people, practice, policy and superior service.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                COM ENTERPRISE, LLC
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold">
                A COMMERCIAL & INDUSTRIAL CONSTRUCTION BUILDER
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-300 italic">
                  "To build the commercial pillars of tomorrow today"
                </p>
                <p className="text-lg text-gray-300 italic">
                  "Construir hoy los pilares comerciales del mañana"
                </p>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To service our Texas infrastructure responsibly through
                reasonable renovations, remodeling and additions to our
                communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage("services")}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  View Services <ChevronRight className="inline ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-300 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center"
                alt="Construction site"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a foundation of quality, safety, and community engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Quality</div>
              <div className="text-blue-200">Project Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Expert</div>
              <div className="text-blue-200">Inspection Team</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                Long-term
              </div>
              <div className="text-blue-200">Client Relationships</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Superior</div>
              <div className="text-blue-200">Workmanship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
