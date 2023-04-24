import { GroupContainer, FormInputContainer, FormInputLabel } from './styles';

type FormInputProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  [x: string]: any;
};

function FormInput({ handleChange, label, ...props }: FormInputProps) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}

export default FormInput;
