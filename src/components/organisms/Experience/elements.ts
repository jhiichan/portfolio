import styled from '@emotion/styled';

const Container = styled.div``;

const ExperiencesContainer = styled.div`
  .experience-row-container {
    padding: 16px;
  }

  .experience-row-container:not(:first-of-type) {
    border-top: 1px solid gray;
  }

  .position-container {
    padding: 16px 0;
  }

  .position-container .description {
    white-space: pre-wrap;
  }
`;

export { Container, ExperiencesContainer };
