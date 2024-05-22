import CalendarItems from "../CalendarItems/CalendarItems";

function Calendar({ year }) {
  const currentDate = new Date();

  const renderCalendar = () => {
    let calendar = [];
    for (var i = 1; i <= 12; i++) {
      calendar.push(<CalendarItems month={i} year={year} />);
    }
    return calendar;
  };
  return <div className="flex ">{renderCalendar()}</div>;
}

export default Calendar;
