import React, {useRef} from 'react';

function FocusButtonClickFive() {
const inputRef = useRef(null);

  const handleClick =() => {
 if (inputRef.current) {
inputRef.current.focus()
 }
  }


  return (
    <div>
      <h1>Focus Input Example</h1>
      <input 
      ref={inputRef}
      placeholder="Click the button to focus me" />
      <button
      onClick={handleClick}
      >Click Me to Focus Input</button>
    </div>
  );
}

export default FocusButtonClickFive