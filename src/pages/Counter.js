import { useState } from "react";

function Counter(){

    const[count,SetCount]=useState(0);

    const handleClick = (e) => {
  console.log('Event:', e); // See the event object
  if (count < 5) {
    SetCount(count + 1);
  }
};

const handleInputChange = (e) => {
  //console.log('Input Value:', e.target.value); // ✅ logs what you typed

   console.log('Input Value:', e.target.value);
};

    /*const handleClick =()=>{
           if (count < 5) {
            SetCount(count + 1);
            }else{

                SetCount("Reached morethan 5")
            }

    };*/


    return(

     <div className="container mt-5">
      <h2>Simple Counter</h2>
      <input type="text" onChange={handleInputChange} />
      <p>Current Count: {count}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Increment
      </button>
    </div>
    );
}

export default Counter;