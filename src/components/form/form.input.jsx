import React from "react";

export function TextInput({ label }) {
  const name = label.replace(/\s+/g, "").toLowerCase();

  return (
    <label htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type="text"
        placeholder={label}
        required
      ></input>
    </label>
  );
}

export function NumberInput({ label }) {
  const name = label.replace(/\s+/g, "").toLowerCase();
  // remove non-numeric characters
  function handleInput(e) {
    e.target.value = e.target.value.replace(/\D/g, "");
  }

  return (
    <label htmlFor={name}>
      {label}
      <input
        onChange={handleInput}
        id={name}
        name={name}
        type="text"
        placeholder={label}
        required
      ></input>
    </label>
  );
}
