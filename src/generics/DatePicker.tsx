interface OwnProps {
  htmlFor: string;
  label: string;
}

const DatePicker: React.FC<OwnProps> = ({ htmlFor, label }) => {
  return (
    <div>
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={htmlFor}
      >
        {label}:
      </label>
      <input
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 w-full text-secondary bg-primary bg-opacity-20"
        type="date"
        id={htmlFor}
        name={htmlFor}
        required
      />
    </div>
  );
};

export default DatePicker;
