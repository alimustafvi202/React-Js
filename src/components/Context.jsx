// // NoContextWithoutCallback.js
// import React, { useState } from 'react';

// function Parent() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   // Function recreated every time
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <input 
//         placeholder="Type something..." 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//       />
//       <Child onClick={increment} />
//     </div>
//   );
// }

// const Child = React.memo(({ onClick }) => {
//   console.log('Child rendered');
//   return <button onClick={onClick}>Increment</button>;
// });

// export default Parent;



// NoContextWithCallback.js
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Function is memoized
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <input 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <Child onClick={increment} />
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
});

export default Parent;
