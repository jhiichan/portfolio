import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import { DEVICE_MEDIA_QUERIES } from '../../../constants';

const Container = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.palette.grey[900]};

  .copyright-container {
    padding: 8px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  @media ${DEVICE_MEDIA_QUERIES.phones}, ${DEVICE_MEDIA_QUERIES.tablets} {
    padding: 16px 20px;
  }
`;

export { Container };
