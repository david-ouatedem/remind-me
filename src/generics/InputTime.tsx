const InputTime = () => {
  return (
    <div className="flex items-center gap-2">
      <label
        className="capitalize text-lg font-medium text-secondary flex flex-col items-start gap-1"
        htmlFor="time-input"
      >
        Chosir l'heure:
      </label>
      <input
        type="time"
        id="time-input"
        name="time"
        step="3600"
        className="rounded-md border border-primary outline-none focus:border-tertiary p-2 text-secondary bg-primary bg-opacity-20"
      ></input>
    </div>
  );
};

export default InputTime;
