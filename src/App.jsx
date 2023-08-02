import React from "react";
import Form from "./Form";
import "./App.css";
import { useState } from 'react';

function App() {
  function handleSubmit(){
    e.preventDefault();
  }
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form />
    </main>
  );
}

export default App;
