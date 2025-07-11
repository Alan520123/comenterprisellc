import React from "react";
import { Building, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      category: "Commercial Construction",
      location: "Austin, TX",
      year: "2024",
      description:
        "A modern 5-story office building with sustainable features and state-of-the-art amenities. This project showcases our commitment to quality commercial construction.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop&crop=center",
      features: [
        "LEED Certified",
        "Smart Building Technology",
        "Energy Efficient",
        "Modern Design",
      ],
      status: "Completed",
    },
    {
      id: 2,
      title: "Industrial Warehouse Renovation",
      category: "Renovations & Remodeling",
      location: "Houston, TX",
      year: "2024",
      description:
        "Complete renovation of a 50,000 sq ft industrial warehouse, transforming it into a modern distribution center with improved efficiency and safety features.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&crop=center",
      features: [
        "Safety Improvements",
        "Efficiency Upgrades",
        "Modern Equipment",
        "OSHA Compliance",
      ],
      status: "Completed",
    },
    {
      id: 3,
      title: "Retail Plaza Development",
      category: "Commercial Construction",
      location: "San Antonio, TX",
      year: "2023",
      description:
        "A comprehensive retail plaza featuring multiple storefronts, parking facilities, and landscaping designed to serve the local community.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
      features: [
        "Community Focused",
        "Sustainable Design",
        "Ample Parking",
        "Accessible Features",
      ],
      status: "Completed",
    },
    {
      id: 4,
      title: "Manufacturing Facility Expansion",
      category: "Infrastructure Development",
      location: "Dallas, TX",
      year: "2023",
      description:
        "Expansion of an existing manufacturing facility to increase production capacity while maintaining operational efficiency and safety standards.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop&crop=center",
      features: [
        "Increased Capacity",
        "Safety Integration",
        "Minimal Downtime",
        "Quality Standards",
      ],
      status: "Completed",
    },
    {
      id: 5,
      title: "Medical Office Building",
      category: "Commercial Construction",
      location: "Fort Worth, TX",
      year: "2025",
      description:
        "A specialized medical office building designed with patient care in mind, featuring modern medical infrastructure and accessible design.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop&crop=center",
      features: [
        "Medical Grade Systems",
        "Patient Accessibility",
        "Modern Infrastructure",
        "Healing Environment",
      ],
      status: "In Progress",
    },
    {
      id: 6,
      title: "Educational Facility Renovation",
      category: "Renovations & Remodeling",
      location: "Austin, TX",
      year: "2025",
      description:
        "Comprehensive renovation of an educational facility to create modern learning environments while preserving the building's historic character.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop&crop=center",
      features: [
        "Historic Preservation",
        "Modern Learning Spaces",
        "Technology Integration",
        "Safety Upgrades",
      ],
      status: "In Progress",
    },
  ];

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );
  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600">
            Building Texas communities through quality construction and
            renovation
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Cities Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
            <div className="text-gray-600">Safety Incidents</div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {project.category}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {inProgressProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {project.category}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Project Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Planning & Design
              </h3>
              <p className="text-gray-600">
                Comprehensive project planning with detailed design
                specifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Preparation
              </h3>
              <p className="text-gray-600">
                Site preparation and resource allocation with safety protocols
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Construction
              </h3>
              <p className="text-gray-600">
                Expert construction with continuous quality monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Completion
              </h3>
              <p className="text-gray-600">
                Final inspection and handover with ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
