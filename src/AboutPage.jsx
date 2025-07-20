import React from "react";
import normaImg from "./Assets/Team/Norma President CEO/IMG_1188.JPG";
import benitoSeniorImg from "./Assets/Team/Benito Senior PM/Attachment.jpg";
import benitoAssistantImg from "./Assets/Team/Benito Assistant PM/IMG_9825.jpg";
import romeoImg from "./Assets/Team/Romeo Field Manager/attachment1681946979861.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About COM Enterprise
          </h1>
          <p className="text-xl text-gray-600">
            Building Texas infrastructure responsibly since our founding
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=600&fit=crop&crop=center"
              alt="Construction team"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              COM Enterprise, LLC is a commercial and industrial construction
              builder dedicated to servicing Texas infrastructure responsibly
              through reasonable renovations, remodeling, and additions to our
              communities.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our team's experience includes a wide array of projects that
              provide the expertise necessary to expedite your needs. We pledge
              to provide superior quality in workmanship, supervision, and
              project completion within budget.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-semibold text-lg italic">
                "To build the commercial pillars of tomorrow today"
              </p>
              <p className="text-blue-700 mt-2 italic">
                "Construir hoy los pilares comerciales del mañana"
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Experienced Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our high-performing inspection team brings years of experience
                across a wide array of commercial and industrial projects
                throughout Texas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We handle hazards of demolition work by minimizing risk through
                proper training, controlled project planning, and strict OSHA
                compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Focused
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in engaging with our communities and are grounded in
                people, practice, policy, and superior service to our
                communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quality is not negotiable in our business. We ensure every
                project meets our high standards for workmanship and completion
                within budget.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Norma",
              title: "President & CEO",
              image: normaImg,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
            },
            {
              name: "Benito",
              title: "Senior Project Manager",
              image: benitoSeniorImg,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
            },
            {
              name: "Benito",
              title: "Assistant Project Manager",
              image: benitoAssistantImg,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
            },
            {
              name: "Romeo",
              title: "Field Manager",
              image: romeoImg,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-600 shadow"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <h4 className="text-blue-600 font-semibold mb-3">{member.title}</h4>
              <p className="text-gray-600 text-center text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
