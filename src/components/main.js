import { Inter } from "next/font/google";
import { css } from "@emotion/css";
import Day from "./day";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const pink = css`
  color: hotpink;
`;

export default function Main() {
  const changeDate = (YEAR, month) => {
    //이전 날짜
    let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PVLastDay = new Date(YEAR, month - 1, 0).getDay();

    const ThisLasyDay = new Date(YEAR, month, 0).getDay();
    const ThisLasyDate = new Date(YEAR, month, 0).getDate();

    let PVLD = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }

    let TLD = [];
    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    let TD = Array.from(Array(ThisLasyDate + 1).keys()).slice(1);

    return PVLD.concat(TD, TLD);
  };

  const week1 = [];
  const week2 = [];
  const week3 = [];
  const week4 = [];
  const week5 = [];
  const week6 = [];
  changeDate(2023, 7).map((ele, index) => {
    if ((index + 1) / 7 <= 1) {
      week1.push(ele);
    } else if ((index + 1) / 7 <= 2) {
      week2.push(ele);
    } else if ((index + 1) / 7 <= 3) {
      week3.push(ele);
    } else if ((index + 1) / 7 <= 4) {
      week4.push(ele);
    } else if ((index + 1) / 7 <= 5) {
      week5.push(ele);
    } else if ((index + 1) / 7 <= 6) {
      week6.push(ele);
    }
  });

  console.log(week1);
  console.log(week2);
  console.log(week3);
  console.log(week4);
  console.log(week5);
  console.log(week6);

  return (
    <>
      <div className="container">
        <div className="calendar">
          <h3 className="yearMonth">2023년 7월</h3>
          <div className="weekName">
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
          </div>
          <div className="month">
            {/* <div className="week1 week"> */}

            <Day value={"attendance"} day={week1[0]} week={1} />
            <Day value={"attendance"} day={week1[1]} week={1} />
            <Day value={"attendance"} day={week1[2]} week={1} />
            <Day value={"attendance"} day={week1[3]} week={1} />
            <Day value={"attendance"} day={week1[4]} week={1} />
            <Day value={"attendance"} day={week1[5]} week={1} />
            <Link
              href="/Details"
              className={css`
                text-decoration: none;
              `}
            >
              <Day value={"attendance"} day={week1[6]} week={1} />
            </Link>
            {/* </div> */}
            {/* <div className="week2 week"> */}
            <Link
              href="/Details"
              className={css`
                text-decoration: none;
              `}
            >
              <Day value={"attendance"} day={week2[0]} week={2} />
            </Link>
            <Link
              href="/Details"
              className={css`
                text-decoration: none;
              `}
            >
              <Day value={"attendance"} day={week2[1]} week={2} />
            </Link>
            <Day value={""} day={week2[2]} week={2} />
            <Day value={""} day={week2[3]} week={2} />
            <Day value={""} day={week2[4]} week={2} />
            <Day value={""} day={week2[5]} week={2} />
            <Day value={""} day={week2[6]} week={2} />
            {/* </div> */}
            {/* <div className="week3 week"> */}
            <Day value={""} day={week3[0]} week={3} />
            <Day value={""} day={week3[1]} week={3} />
            <Day value={""} day={week3[2]} week={3} />
            <Day value={""} day={week3[3]} week={3} />
            <Day value={""} day={week3[4]} week={3} />
            <Day value={""} day={week3[5]} week={3} />
            <Day value={""} day={week3[6]} week={3} />
            {/* </div> */}
            {/* <div className="week4 week"> */}
            <Day value={""} day={week4[0]} week={4} />
            <Day value={""} day={week4[1]} week={4} />
            <Day value={""} day={week4[2]} week={4} />
            <Day value={""} day={week4[3]} week={4} />
            <Day value={""} day={week4[4]} week={4} />
            <Day value={""} day={week4[5]} week={4} />
            <Day value={""} day={week4[6]} week={4} />
            {/* </div> */}
            {/* <div className="week5 week"> */}
            <Day value={""} day={week5[0]} week={5} />
            <Day value={""} day={week5[1]} week={5} />
            <Day value={""} day={week5[2]} week={5} />
            <Day value={""} day={week5[3]} week={5} />
            <Day value={""} day={week5[4]} week={5} />
            <Day value={""} day={week5[5]} week={5} />
            <Day value={""} day={week5[6]} week={5} />
            {/* </div> */}
            {/* <div className="week6 week"> */}
            <Day value={""} day={week6[0]} week={6} />
            <Day value={""} day={week6[1]} week={6} />
            <Day value={""} day={week6[2]} week={6} />
            <Day value={""} day={week6[3]} week={6} />
            <Day value={""} day={week6[4]} week={6} />
            <Day value={""} day={week6[5]} week={6} />
            <Day value={""} day={week6[6]} week={6} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
