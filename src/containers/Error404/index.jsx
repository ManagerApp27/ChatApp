import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ErrorText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Error404 = () => (
  <PageContainer>
    <ErrorText>Error 404</ErrorText>
  </PageContainer>
);

export default Error404;
