import React from 'react';
import { Collapse, CardContent, Typography } from '@mui/material';
import { StyledCard } from './elements';

type Props = {
  name: string;
  expanded?: boolean;
  skillImgSrc?: string;
  children?: React.ReactNode;
  onCardClick?: () => void;
};

const Component = ({ name, expanded, skillImgSrc, children, onCardClick }: Props) => {
  return (
    <StyledCard className={expanded ? 'expanded' : 'collapsed'} onClick={onCardClick}>
      <Collapse in={!expanded} orientation='horizontal' timeout='auto' unmountOnExit>
        <CardContent className='collapsed-content'>
          <img src={skillImgSrc} />
          <Typography variant='h6'>{name}</Typography>
        </CardContent>
      </Collapse>
      <Collapse in={expanded} orientation='horizontal' timeout='auto' unmountOnExit>
        <CardContent className='expanded-content'>
          <div className='expanded-content-header'>
            <img src={skillImgSrc} />
            <Typography variant='h6'>{name}</Typography>
          </div>
          <div className='expanded-content-content'>{children}</div>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default Component;
export type { Props };
