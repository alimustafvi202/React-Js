// import React, { useState } from 'react';

// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }

// const ChildComponent = ({ onClick }) => {
//   console.log("ChildComponent rendered");
//   return <button onClick={onClick}>Increment</button>;
// };

// export default ParentComponent;
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoizing the function with useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only change the function if 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Increment</button>;
});

export default ParentComponent;
