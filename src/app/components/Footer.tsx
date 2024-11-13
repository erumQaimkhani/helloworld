import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      {/* Top Section: Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">MyWebsite</h1>
          <p className="text-sm text-gray-800 mt-2">
            Your go-to place for amazing content and services.
          </p>
        </div>
      </div>
    </div>
  );
}
