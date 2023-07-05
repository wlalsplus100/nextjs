import styled from "@emotion/styled";

const Tag = ({ value }) => {
  return (
    <TagContainer>
      <TagTxt>{value}</TagTxt>
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  border-radius: 15px;
  border: 1px solid #4f9568;
  margin: 0 5px;
  text-align: center;
  height: 30px;
`;

const TagTxt = styled.span`
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.12px;
  padding: 8px 16px;
  color: #4f9568;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;
