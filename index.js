import React, {useState} from "react";

const TodoList = () => {
   const [num, setNum] = useState(0);

   const incNum = () => {
     setNum(num +1);
   };

   const decNum = () => {
     setNum(num -2);
   };

   const incrNum = () => {
    setNum(num +5);
  };

  const decrNum = () => {
    setNum(0);
  };
 
  return(
   <> 
      <div className='main_div'>
      <div className='center_div'>
        <h1> {num} </h1>
          <div className='btn_div'>
           <button onClick={incNum}> Incr by 1 </button>
           <button onClick={decNum}> Decr by 2 </button>
           <button onClick={incrNum}> Incr by 5 </button>
           <button onClick={decrNum}> Reset </button>
         </div>
         </div>
      </div>
     </> 
  );
}
export default TodoList;