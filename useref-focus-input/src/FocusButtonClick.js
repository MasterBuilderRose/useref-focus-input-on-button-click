import React, { useRef } from "react";

const FocusButtonClick = () => {
  const inputRef = useRef(null); // Step 1: Create a ref

  const handleClick = () => {
    // Step 2: Use the ref to focus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Focus Input Example</h2>
      <input
        type="text"
        ref={inputRef} // Step 3: Attach the ref to the input
        placeholder="Click the button to focus me"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleClick}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusButtonClick;
