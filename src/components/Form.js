import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleFirstNameChange(event) {
  setFirstName(event.target.value);}

  function handleLastNameChange(event) {
  setLastName(event.target.value);}

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }


  return (
    <form>
       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input type="text" onChange={handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={handleLastNameChange} value={props.lastName} />
            <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        /* checked instead of value */
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
