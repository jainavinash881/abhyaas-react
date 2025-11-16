// src/components/ScheduleButton.jsx
import React from "react";

const ScheduleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-200"
    >
      Schedule a Class
    </button>
  );
};

export default ScheduleButton;
