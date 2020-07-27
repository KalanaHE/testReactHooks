import React, { useState } from "react";

function HookCounter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setcount(count + 1)}>
        {count}
      </button>
    </div>
  );
}

export default HookCounter;
