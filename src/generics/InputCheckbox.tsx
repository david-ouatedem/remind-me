interface OwnProps {
  name: string;
  label: string;
}

const InputCheckbox: React.FC<OwnProps> = ({ label, name }) => {
  return (
    <div className="flex items-center gap-2">
      <input name={name} type="checkbox" id={name} value={name} required />
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
