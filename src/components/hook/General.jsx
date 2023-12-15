import React, {useState} from "react";

//hook mush use inside the function component
function General() {
    //1.call useState and give the initial value
    //2.that value get stored inside variabe [count]
    //3.it render inside the <h1>
    //4.when user press on button, onClick get triggered the increase() is activated
    //5.increase function ganna call setCount which is ganna update state of [count] variable
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count - 1);
    }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default General;
