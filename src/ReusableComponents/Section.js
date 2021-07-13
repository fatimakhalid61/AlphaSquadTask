import React from "react";

function Section({children}) {
  
  return <div style={{fontFamily: "Mulish, sans-serif"}}  class="w-screen h-auto p-10 grid grid-flow-col gap-22 clear-both bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {children}</div>;
}

export default Section;