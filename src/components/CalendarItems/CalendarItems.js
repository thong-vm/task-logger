import React, { useState } from "react";

function CalendarItems({ month, year }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = month - 1;
  const currentYear = year;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const generateCalendar = () => {
    let calendar = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
      calendar.push(
        <div key={i} className="w-10 border border-gray-300 text-center">
          <div className="text-sm text-gray-500">{daysOfWeek[dayOfWeek]}</div>
          <div>{i}</div>
        </div>
      );
    }
    return calendar;
  };

  return (
    <div className="container mx-auto border">
      <h1 className="text-2xl font-semibold mb-4">
        {months[currentMonth]} {currentYear}
      </h1>
      <div className="flex">{generateCalendar()}</div>
    </div>
  );
}

export default CalendarItems;
