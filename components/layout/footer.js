import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-600 py-8 text-white mt-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-xl font-bold">FIEF</h1>
          <p className="text-sm text-gray-300 mt-2">
            معهد المستقبل العالي للهندسة بالفيوم
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 flex flex-wrap justify-between mt-4 md:mt-0">
          <div className="w-full md:w-1/2">
            <h3 className="text-sm font-bold">Contact Us</h3>
            <ul className="list-none mt-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  Phone Number: 084/2114250
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Email: ts@fayoum.edu.eg
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-sm font-bold">About Us</h3>
            <ul className="list-none mt-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  The University
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  President's Office
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  University Council
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
