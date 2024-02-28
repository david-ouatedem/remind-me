interface OwnProps {
  htmlFor: string;
  label: string;
}

const TextArea: React.FC<OwnProps> = ({ htmlFor, label }) => {
  return (
    <div>
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor={htmlFor}
      >
        {label}:
      </label>
      <textarea
        className="border-2 border-primary rounded-lg bg-primary bg-opacity-20 outline-none p-2 w-full"
        name={htmlFor}
        id={htmlFor}
        cols={30}
        rows={5}
        required
      ></textarea>
    </div>
  );
};

export default TextArea;
