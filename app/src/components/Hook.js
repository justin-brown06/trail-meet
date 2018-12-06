import React, {useState, useEffect} from "react";

function Hook(props){
  // const [count, setCount] = useState(100);
  const [time, setTime] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Hook;
