import { css } from "@emotion/css";

const Tag = ({ value }) => {
  return (
    <div
      className={css`
        border-radius: 15px;
        border: 1px solid #4f9568;
        margin: 0 5px;
        text-align: center;
        height: 30px;
      `}
    >
      <span
        className={css`
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.12px;
          padding: 8px 16px;
          color: #4f9568;
          font-weight: bold;
          font-family: "Roboto", sans-serif;
        `}
      >
        {value}
      </span>
    </div>
  );
};

export default Tag;
