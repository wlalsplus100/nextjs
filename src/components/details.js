import { css } from "@emotion/css";
import Tag from "./tag";

const Details = () => {
  return (
    <>
      <div
        className={css`
          margin: 0 auto;
          width: 380px;
        `}
      >
        <div
          className={css`
            width: 380px;
            background-color: #fff;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}
          >
            <img
              src="dduk.png"
              className={css`
                margin: auto;
                width: 80px;
                margin-bottom: 20px;
              `}
            ></img>
            <p
              className={css`
                font-size: 20px;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                margin-bottom: 20px;
              `}
            >
              기분 최고에요!
            </p>
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
            `}
          >
            <Tag value={"신나요"} />
            <Tag value={"편안해요"} />
            <Tag value={"뿌듯해요"} />
          </div>
          <img
            src="sample.png"
            alt=""
            className={css`
              width: 340px;
              margin: 20px;
            `}
          ></img>
        </div>
        <div
          className={css`
            display: inline-block;
            width: 340px;
            margin-left: 20px;
            margin-bottom: 100px;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 1%;
          `}
        >
          오늘 해커톤을 했는데요, 아직 이틀 남았어요, 지금도 하고 있는데 전 다
          끝냈는데 왜 여기 있는지 모르겠어요. 그래서 지금 당장 탈출하려 해요.
          저도요, 왜 있는지 모르겠어요. 김준호는 나한테 무관심해요.
        </div>
      </div>
    </>
  );
};

export default Details;
