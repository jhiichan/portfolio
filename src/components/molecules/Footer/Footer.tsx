import moment from 'moment';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { darkModeTheme } from '../../../configs';
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
    <Container theme={darkModeTheme}>
      <Stack
        className='footer-content'
        maxWidth='1200px'
        justifyContent='space-between'
        alignItems='center'
        direction='row'
        flex={1}
      >
        <Box className='copyright-container'>
          <Typography variant='body2'>{`© ${currentYear} ${name}. All rights reserved.`}</Typography>
        </Box>
        <Stack alignItems='center' direction='row' spacing={1}>
          {onEmailIconClick && (
            <IconButton color='primary' onClick={onEmailIconClick}>
              <EmailIcon />
            </IconButton>
          )}
          {onGitHubIconClick && (
            <IconButton color='primary' onClick={onGitHubIconClick}>
              <GitHubIcon />
            </IconButton>
          )}
          {onLinkedInIconClick && (
            <IconButton color='primary' onClick={onLinkedInIconClick}>
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
