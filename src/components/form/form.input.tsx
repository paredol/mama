export function TextInput(props: { label: string }) {
  const { label } = props;
  const field = label.replace(/\s+/g, "").toLowerCase();

  if (label === "Password")
    return (
      // <label htmlFor={field}>
        // {label}
        <input
          id={field}
          name={field}
          type={"password"}
          minLength={6}
          autoComplete="off"
          placeholder={label}
        className="text-base p-2 invalid:border-red-500 outline-none"
          required
        ></input>
      // </label>
    );
  else
    return (
      // <label htmlFor={field}>
      //   {label}
        <input
          id={field}
          name={field}
          type={"text"}
        placeholder={label}
        className="text-base p-2 outline-none"
          required
        ></input>
      // </label>
    );
}

export function IntInput(props: { label: string }) {
  const { label } = props;
  const field = label.replace(/\s+/g, "").toLowerCase();
  // remove non-numeric characters
  function handleInput(e: { target: { value: string } }) {
    e.target.value = e.target.value.replace(/\D/g, "");
  }

  return (
    // <label htmlFor={field}>
    //   {label}
      <input
        onChange={handleInput}
        id={field}
        name={field}
        type="text"
        placeholder={label}
        className="text-base p-2 outline-none"
        required
      ></input>
    // </label>
  );
}
