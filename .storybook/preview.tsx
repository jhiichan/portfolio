import type { Preview } from '@storybook/react-webpack5';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { portfolioTheme } from '../src/configs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={portfolioTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
