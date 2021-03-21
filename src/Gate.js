import React, { useState } from "react";

function Gate(props) {
  //   let open = props.active;
  const [open, toggleGate] = useState(props.active);
  //   function toggleGate() {
  //     open = !open;
  //     console.log("open value", open);
  //     document.getElementById("state").innerHTML = (open ? 'open' : 'closed') ;
  //   }
  return (
    <div>
      Gate is <span id="state"> {open == true ? "Open" : "Closed"}</span>
      <button onClick={() => toggleGate(!open)}>Toggle</button>
    </div>
  );
}

export default Gate;
