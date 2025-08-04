import React, { useRef } from "react";

function FocusButtonClickSeven() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button
      onClick={handleClick}
      >Click to Focus Input</button>
    </div>
  );
}

export default FocusButtonClickSeven;
