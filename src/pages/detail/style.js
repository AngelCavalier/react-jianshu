import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 30px;
  color: #333;
  font-weight: bold;
`;

export const Content = styled.div`
  text-align: center;
  img {
    max-width: 100%;
  }
  p {
    text-align: left;
    color: #2f2f2f;
    margin: 20px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;
