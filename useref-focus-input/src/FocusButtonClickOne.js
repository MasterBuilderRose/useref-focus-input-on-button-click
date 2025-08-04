import React, {useRef} from 'react'

function FocusButtonClickOne() {
  const inputRef = useRef(null);

  const handleClick = () => {
if (inputRef.current) {
  inputRef.current.focus();
}
  }
  return (
    <div>
      <h1> UseRef Attempt One: Focus when Button is Clicked</h1>
      <ol>
        First
        <li>H2 Element that displays Focus Input Example</li>
        <li>Input Component/ only controlled when state is involved</li>
        <li>
          placeholder attribute that displays "Click the button to focus me"
        </li>
        <li>useRef hook and with inputRef useRef Variable</li>
        <li>line break under input element</li>
        <li>
          button element with onClick event handler prop and we are passing in
          the handleClick function as the event handler.
        </li>
      </ol>
      <h2>Focus Input Example</h2>
      <input type="text" placeholder="Click the button to focus me" ref={inputRef}/>
      <br />
      <button onClick={handleClick}>Focus Input</button>
      <ol>
        Second
        <li>Create handleClick arrow function</li>
        <li>
          Inside handleClick arrow function create an if statement that ensures
          that the current inputRef variable is focused on
        </li>
        <li>
          assign a React ref inputRef variable using the ref attribute for direct DOM
          access
        </li>
       
      </ol>
    </div>
  );
}

export default FocusButtonClickOne