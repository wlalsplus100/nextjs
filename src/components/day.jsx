const Day = ({ value, day, week, mood = undefined }) => {
  let srcd;
  console.log(mood);
  if (mood == 1) {
    console.log(1);
    srcd = "vbad.png";
  } else if (mood == 2) {
    console.log(2);
    srcd = "bad.png";
  } else if (mood == 3) {
    console.log(3);
    srcd = "notbad.png";
  } else if (mood == 4) {
    console.log(4);
    srcd = "good.png";
  } else if (mood == 5) {
    console.log(5);
    srcd = "vgood.png";
  } else {
    srcd = "nomalDduk.png";
  }
  if (week === 1 && day > 7) {
    return (
      <>
        <div className="notToday">
          <p className="date">{day}</p>
          <img src={srcd} alt="" className="dayDduk attendanceDduk"></img>
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
          <img src={srcd} alt="" className="dayDduk attendanceDduk"></img>
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
