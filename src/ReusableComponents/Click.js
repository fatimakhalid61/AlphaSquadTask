import React from "react";

function Click({ label}) {
  
  return (
    <div>
    <label class="text-gray-500">
    {label} 
    </label>
    <select class="bg-transparent" >
      <option value="All">All</option>
    </select>
    </div>);
}

export default Click;