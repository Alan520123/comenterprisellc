import React, { useState } from "react";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProjectsPage from "./ProjectsPage";
import Footer from "./Footer";
import ContactUsPage from "./ContactUsPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case "projects":
        return <ProjectsPage />;
      case "contactUs":
        return <ContactUsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="pt-16">{renderCurrentPage()}</div>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
