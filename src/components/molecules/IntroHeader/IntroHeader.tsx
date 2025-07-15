import React from 'react';
import { Typography } from '@mui/material';
import { Container } from './elements';

type Props = {
  name: string;
  title: string;
  description: string;
};

const Component = ({ name, title, description }: Props) => {
  return (
    <Container>
      <div className='intro-container'>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </div>
      <div className='profile-picture-container'></div>
    </Container>
  );
};

export default Component;
export type { Props };
