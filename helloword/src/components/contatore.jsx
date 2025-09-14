import React, { useState } from "react";

function Counter (){
    const [count, setCount] = useState(0);
    return (<div>
 Count: {count}
    </div> )
}

export default Counter