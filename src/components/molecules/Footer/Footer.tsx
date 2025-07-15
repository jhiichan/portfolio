import React from 'react';
import moment from 'moment';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { Container } from './elements';

type Props = {
  name: string;
  onEmailIconClick?: () => void;
  onGitHubIconClick?: () => void;
  onLinkedInIconClick?: () => void;
};

const Component = ({ name, onEmailIconClick, onGitHubIconClick, onLinkedInIconClick }: Props) => {
  const currentYear = moment().year();

  return (
    <Container>
      <Stack width='100%' justifyContent='space-between' alignItems='center' direction='row'>
        <Box>
          <Typography variant='body2'>{`© ${currentYear} ${name}. All rights reserved.`}</Typography>
        </Box>
        <Stack alignItems='center' direction='row' spacing={1}>
          {onEmailIconClick && (
            <IconButton onClick={onEmailIconClick}>
              <EmailIcon />
            </IconButton>
          )}
          {onGitHubIconClick && (
            <IconButton onClick={onGitHubIconClick}>
              <GitHubIcon />
            </IconButton>
          )}
          {onLinkedInIconClick && (
            <IconButton onClick={onLinkedInIconClick}>
              <LinkedInIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Component;
export type { Props };
