import React from "react";
import "./Form.css";

function Form() {
  function handleSubmit(){
    e.preventDefault();
  }
  const [numbers, setNumbers] = useState([]);
  const [newNumbers, setNewNumbers] = useState([]);
  const handleTextChange = (e) => {
    setNumbers();{
     
    };
  }
  return (
    <>
      <form onSubmit={handleSubmit}  >
        <input id="values" name="values" type="text"
        onChange = {handleTextChange} />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
