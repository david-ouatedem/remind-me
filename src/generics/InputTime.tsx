const InputTime = () => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="time-input">Select a time:</label>
      <input
        type="time"
        id="time-input"
        name="time"
        step="3600"
        // min="00:00"
        // max="23:59"
        // pattern="[0-2][0-9]:[0-5][0-9]"
      ></input>
    </div>
  );
};

export default InputTime;
