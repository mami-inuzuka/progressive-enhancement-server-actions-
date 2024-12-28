'use client';

import { useState } from "react";
import { handleSubmitJS } from "../_actions/handleSubmitJS";

export const FormPane = ()=> {
  const [name, setName] = useState('');

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={()=> handleSubmitJS(name)}>Submit JavaScript Form</button>
    </div>
  )

}
