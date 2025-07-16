import styled from '@emotion/styled';
import { Card } from '@mui/material';
import { DEVICE_MEDIA_QUERIES } from '../../../constants';

const StyledCard = styled(Card)`
  height: 200px;
  display: flex;
  cursor: pointer;
  overflow: hidden;

  &.collapsed {
    width: 64px;
  }

  &.expanded {
    // width: 200px;
  }

  .collapsed-content {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    height: calc(100% - 39px);
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 7px;
    height: 186px;
  }

  .collapsed-content img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .expanded-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 200px;
  }

  .expanded-content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .expanded-content-header img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .expanded-content-content {
    align-self: start;
    width: 100%;
  }

  @media ${DEVICE_MEDIA_QUERIES.phones} {
    height: initial;
    align-items: center;

    &.collapsed {
      width: 100%;
    }

    &.expanded {
      justify-content: center;
    }

    && .collapsed-content {
      writing-mode: initial;
      text-orientation: initial;
      height: initial;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 7px 7px 7px 30px;
    }
  }
`;

export { StyledCard };
