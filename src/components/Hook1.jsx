import React, {useState}from 'react';

function Hook1() {

const [color, setcolor] = useState({ bgcolor: 'red', text: 'black' });
const [color2, setcolor2] = useState({ bgcolor: 'blue', text2: 'green' });

const changecolor1 = () => {
  setcolor((previous) => ({
    bgcolor: previous.bgcolor === 'red' ? 'yellow' : 'red',
    text: previous.text === 'yellow' ? 'red' : 'yellow',
  }));
};

const changecolor2 = () => {
  setcolor2((previous) => ({
    bgcolor: previous.bgcolor === 'blue' ? 'green' : 'blue',
    text: previous.text2 === 'green' ? 'blue' : 'green',
  }));
};

return (
<>
<div style={{backgroundColor: color.bgcolor, 
     color: color.text, 
     padding:'50px' ,
     height:'50px' , 
     width:'50px'}} 
     onClick={changecolor1}
     >
    Change Div Color 
</div>

<div style={{backgroundColor: color2.bgcolor, 
    color: color2.text2, 
    padding:'50px' ,
     height:'50px' , 
     width:'50px'}} 
     onClick={changecolor2}
     >
        
    Change Div Color    
</div>
</>
)}
export default Hook1;



