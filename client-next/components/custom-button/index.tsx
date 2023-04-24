import { CustomButtonContainer } from './styles';

type CustomButtonProps = {
  children: React.ReactNode
  [x: string]: any;
};
function CustomButton({ children, ...props }: CustomButtonProps) {
  return <CustomButtonContainer {...props}> {children} </CustomButtonContainer>;
}

export default CustomButton;
