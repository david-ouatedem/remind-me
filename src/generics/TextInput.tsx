interface OwnProps {
  htmlFor: string;
  type: React.HTMLInputTypeAttribute | undefined;
}

const TextInput: React.FC<OwnProps> = ({ htmlFor, type }) => {
  return (
    <div>
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={htmlFor}
      >
        {htmlFor}:
      </label>
      <input
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 w-full text-secondary bg-primary bg-opacity-20"
        type={type}
        id={htmlFor}
      />
    </div>
  );
};

export default TextInput;
