import React from 'react';
import { Typography } from '@mui/material';
import { Container } from './elements';
import { darkModeTheme } from '../../../configs';

type Props = {
  name: string;
  title: string;
  description: string;
  profilePicSrc?: string;
};

const Component = ({ name, title, description, profilePicSrc }: Props) => {
  return (
    <Container theme={darkModeTheme}>
      <div className='profile-picture-container'>
        <img src={profilePicSrc} />
      </div>
      <div className='intro-container'>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2' className='intro-description'>
          {description}
        </Typography>
      </div>
    </Container>
  );
};

export default Component;
export type { Props };
