import Content from "./content";
import styled from "@emotion/styled";

const Timeline = (today) => {
  return (
    <>
      <Container>
        <DayofWeek>
          <GreenTxt>04 화</GreenTxt>
          <GreenTxt>05 수</GreenTxt>
          <Today>06 목</Today>
          <GreenTxt>07 금</GreenTxt>
          <GreenTxt>08 토</GreenTxt>
        </DayofWeek>
        <Content value={"0"} />
        <Content value={"1"} />
        <Content value={"2"} />
      </Container>
    </>
  );
};

export default Timeline;

const Container = styled.div`
  padding-top: 12px;
  margin: 0 auto;
  width: 378px;
`;

const DayofWeek = styled.div`
  margin: 0 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const GreenTxt = styled.span`
  color: #4f9568;
`;

const Today = styled.span`
  background-color: #4f9568;
  border-radius: 20px;
  padding: 6px 16px;
  color: #fff;
`;
