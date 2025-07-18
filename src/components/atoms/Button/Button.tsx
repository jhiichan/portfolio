import { Button, type ButtonProps } from '@mui/material';

type Props = {} & ButtonProps;

const Component = ({ children, ...otherProps }: Props) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default Component;
export type { Props };
