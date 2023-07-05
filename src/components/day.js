const Day = ({ value, day, week }) => {
  if (week === 1 && day > 7) {
    return (
      <>
        <div className="notToday">
          <p className="date">{day}</p>
          <img
            src="nomalDduk.png"
            alt=""
            className="dayDduk attendanceDduk"
          ></img>
        </div>
      </>
    );
  }
  if (week > 2 && day < 7) {
    return (
      <>
        <div className="notToday">
          <p className="date">{day}</p>
          <img
            src="nomalDduk.png"
            alt=""
            className="dayDduk attendanceDduk"
          ></img>
        </div>
      </>
    );
  }

  if (value == "attendance") {
    return (
      <>
        <div className="day">
          <p className="date link">{day}</p>
          <img
            src="nomalDduk.png"
            alt=""
            className="dayDduk attendanceDduk"
          ></img>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="day">
          <p className="date">{day}</p>
          <img src="day.png" alt="" className="dayDduk nAttendanceDduk"></img>
        </div>
      </>
    );
  }
};

export default Day;
