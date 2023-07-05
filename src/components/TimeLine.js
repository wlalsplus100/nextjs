import { css } from "@emotion/css";
import Content from "./content";

const Timeline = (today) => {
  return (
    <>
      <div
        className={css`
          width: 412px;
        `}
      >
        <div
          className={css`
            margin: 0 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          `}
        >
          <span
            className={css`
              color: #4f9568;
            `}
          >
            04 화
          </span>
          <span
            className={css`
              color: #4f9568;
            `}
          >
            05 수
          </span>
          <span
            className={css`
              background-color: #4f9568;
              border-radius: 20px;
              padding: 6px 16px;
              color: #fff;
            `}
          >
            06 목
          </span>
          <span
            className={css`
              color: #4f9568;
            `}
          >
            07 금
          </span>
          <span
            className={css`
              color: #4f9568;
            `}
          >
            08 토
          </span>
        </div>
        <Content value={"0"} />
        <Content value={"1"} />
        <Content value={"2"} />
      </div>
    </>
  );
};

export default Timeline;
