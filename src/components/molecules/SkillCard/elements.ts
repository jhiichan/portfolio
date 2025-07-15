import styled from '@emotion/styled';
import { Card } from '@mui/material';

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
    width: 200px;
  }

  .expanded-content .expanded-content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .expanded-content-header img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .expanded-content .expanded-content-content {
    align-self: start;
  }
`;

export { StyledCard };
