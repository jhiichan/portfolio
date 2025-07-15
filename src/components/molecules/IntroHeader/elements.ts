import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  .intro-container {
    flex: 1;
  }

  .profile-picture-container {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: gray;
  }
`;

export { Container };
