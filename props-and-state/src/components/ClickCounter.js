import React, { useState } from 'react';

const ClickCounter = () => {
    const clickStyle = {"marginTop":"10px","fontWeight":"bold", "cursor":"pointer","fontSize":"1.1em","padding":"10px 15px","backgroundColor":"#007cba","color":"#fff","borderRadius":"5px","border":"0px"};
    const unclickStyle = {"float":"right","marginTop":"10px","fontWeight":"bold", "cursor":"pointer","fontSize":"1.1em","padding":"10px 15px","backgroundColor":"#cc0000","color":"#fff","borderRadius":"5px","border":"0px"};
  
    const [count, setCount] = useState(0);
    return(
    <div>
        <h2>Count: {count}</h2>
        <div>Click the button below to increment the counter</div>
        <button style={clickStyle} onClick={() => setCount(count + 1)}>Click!</button>
        <button style={unclickStyle} onClick={() => setCount(count - 1)}>UnClick!</button>
    </div>
    );
}

export default ClickCounter;