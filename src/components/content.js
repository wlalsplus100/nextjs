import { css } from "@emotion/css";

const Content = ({ value }) => {
  const userImg = ["dduk.png", "dduk2.png", "dduk3.png"];
  const sampleImg = ["sample.png", "sample2.png", "sample3.png"];
  const userTxt = [
    "오늘 해커톤을 했는데요, 아직 이틀 남았어요, 지금도 하고 있는데 전 다 끝냈는데 왜 여기 있는지 모르겠어요. 그래서 지금 당장 탈출하려 해요.저도요, 왜 있는지 모르겠어요. 김준호는 나한테 무관심해요.",
    "오늘 해커톤을 했는데요, 우리 집 고양이가 보고 싶어요, 갤러리에 있는 사진들은 죄다 내가 찍어서 구려요. 빨리 실물로 보고 싶어요. 얼른 집에 가고싶어요. 그러고 보니까 여기 드라이기 뜨거운 바람만 나와요.",
    "오늘 해커톤을 했는데요, 이제 곧 끝날 것 같아요, 프로젝트가 만족스러워서 기분이 좋아요. 디자인도 너무 이쁘고 귀엽고 최고에요. 그러고 보니까 캐릭터 볼 때 마다 떡이 먹고 싶어요. 인절미, 절편, 가래떡 맛있겠다.",
  ];
  const userEmotion = [
    ["신나요", "편안해요", "뿌듯해요"],
    ["외로워요", "설레요", "피곤해요"],
    ["상쾌해요", "의욕적이에요", "설레요"],
  ];

  return (
    <>
      <div
        className={css`
          width: 380px;
          margin-left: 16px;
          border-radius: 10px;
          background: #f9f9f9;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          position: relative;
          height: 429px;
          margin-bottom: 20px;
        `}
      >
        <img
          src={userImg[value]}
          alt=""
          className={css`
            width: 50px;
            margin-left: 32px;
            margin-top: 30px;
            margin-bottom: 10px;
          `}
        ></img>
        <p
          className={css`
            margin-left: 20px;
            color: #000;
            font-size: 12px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0.12px;
          `}
        >
          기분 최고에요!
        </p>
        <img
          src={sampleImg[value]}
          alt=""
          className={css`
            width: 244px;
            height: 244px;
            display: inline-block;
            left: 124px;
            position: relative;
            top: -80px;
          `}
        ></img>
        <div
          className={css`
            display: flex;
            position: relative;
            margin-left: 124px;
            top: -74px;
          `}
        >
          <div
            className={css`
              border-radius: 15px;
              border: 1px solid #4f9568;
              margin: 0 5px;
              text-align: center;
              height: 23px;
            `}
          >
            <span
              className={css`
                display: inline-block;
                font-size: 10px;
                letter-spacing: 0.12px;
                padding: 6px 12px;
                color: #4f9568;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                position: relative;
                top: -2px;
              `}
            >
              {userEmotion[value][0]}
            </span>
          </div>
          <div
            className={css`
              border-radius: 15px;
              border: 1px solid #4f9568;
              margin: 0 5px;
              text-align: center;
              height: 23px;
            `}
          >
            <span
              className={css`
                display: inline-block;
                font-size: 10px;
                letter-spacing: 0.12px;
                padding: 6px 12px;
                color: #4f9568;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                position: relative;
                top: -2px;
              `}
            >
              {userEmotion[value][1]}
            </span>
          </div>
          <div
            className={css`
              border-radius: 15px;
              border: 1px solid #4f9568;
              margin: 0 5px;
              text-align: center;
              height: 23px;
            `}
          >
            <span
              className={css`
                display: inline-block;
                font-size: 10px;
                letter-spacing: 0.12px;
                padding: 6px 12px;
                color: #4f9568;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                position: relative;
                top: -2px;
              `}
            >
              {userEmotion[value][2]}
            </span>
          </div>
        </div>
        <p
          className={css`
            position: relative;
            margin-top: 6px;
            font-size: 12px;
            width: 244px;
            line-height: 20px;
            left: 124px;
            top: -72px;
          `}
        >
          {userTxt[value]}
        </p>
      </div>
    </>
  );
};

export default Content;
