import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const roles = useMemo(
    () => [
      "Software Engineer",
      "Full Stack Developer",
      "UI/UX Designer",
      "Solutions Architect",
    ],
    [],
  );
  const [currentRole, setCurrentRole] = useState("Software Engineer");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState("Software Engineer".length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 3000);
      return () => clearTimeout(waitTimeout);
    }

    const handleTyping = () => {
      const current = roles[roleIndex] || "";
      if (isDeleting) {
        setCurrentRole((prev) => prev.slice(0, -1));
      } else if (typingIndex < current.length) {
        setCurrentRole((prev) => prev + current[typingIndex]);
      }

      if (!isDeleting && typingIndex === current.length - 1) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingIndex(0);
        return;
      }

      setTypingIndex((prev) => (isDeleting ? Math.max(prev - 1, 0) : prev + 1));
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [roles, roleIndex, typingIndex, isDeleting, currentRole, isWaiting]);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-4 shadow-xs">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex cursor-pointer flex-col" onClick={handleRedirect}>
          <span className="text-2xl leading-none font-bold text-nowrap text-white">
            Sam Hillier
          </span>
          <span className="text-sm leading-none font-light text-nowrap text-gray-200">
            {currentRole}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* 
        <button
          className="text-white focus:outline-hidden md:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        */}
      </div>

      {/* 
      <div
        className={`fixed inset-y-0 left-0 transform bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-30 transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50"
          onClick={toggleSidebar}
        ></div>
      )}
      */}
    </header>
  );
};

export default Header;
