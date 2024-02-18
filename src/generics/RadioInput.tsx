interface OwnProps {
  name: string;
  label: string;
}

const RadioInput: React.FC<OwnProps> = ({ name, label }) => {
  return (
    <div className="flex items-center gap-2">
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={name}
      >
        {label}
      </label>
      <input name={name} type="radio" id={name} required />
    </div>
  );
};

export default RadioInput;
