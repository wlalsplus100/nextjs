import { css } from "@emotion/css";
import Tag from "./tag";
import styled from "@emotion/styled";

export default function Details() {
  return (
    <>
      <Container>
        <Wrapper>
          <FlexContainer>
            <Emoji
              src="dduk.png"
              className={css`
                margin: auto;
                width: 80px;
                margin-bottom: 20px;
              `}
            ></Emoji>
            <EmoteText>기분 최고에요!</EmoteText>
          </FlexContainer>
          <Tags>
            <Tag value={"신나요"} />
            <Tag value={"편안해요"} />
            <Tag value={"뿌듯해요"} />
          </Tags>
          <ContentImg src="sample.png" alt=""></ContentImg>
        </Wrapper>
        <ContentTxt>
          오늘 해커톤을 했는데요, 아직 이틀 남았어요, 지금도 하고 있는데 전 다
          끝냈는데 왜 여기 있는지 모르겠어요. 그래서 지금 당장 탈출하려 해요.
          저도요, 왜 있는지 모르겠어요. 김준호는 나한테 무관심해요.
        </ContentTxt>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 380px;
`;

const Wrapper = styled.div`
  width: 380px;
  background-color: #fff;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.img`
  margin: auto;
  width: 80px;
  margin-bottom: 20px;
`;

const EmoteText = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentImg = styled.img`
  width: 340px;
  margin: 20px;
`;

const ContentTxt = styled.p`
  display: inline-block;
  width: 340px;
  margin-left: 20px;
  margin-bottom: 100px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1%;
`;
