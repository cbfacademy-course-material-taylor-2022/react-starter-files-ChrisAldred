import React from 'react';

const GadgetList = (props) => {
  console.log(props);
  const itemStyle = {"marginBottom":"10px"};
  const titleStyle = {"fontWeight":"bold","paddingBottom":"10px"};
  const priceStyle = {"color":"#cc0000", "fontWeight":"bold","fontSize":"1.1em","borderBottom":"1px solid #afafaf"};
  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <div>
        <h3 style={titleStyle}>{item.title}</h3>
        <img style={itemStyle} src={item.src} alt={item.title}/>
        <p style={priceStyle}>{item.price}</p>
      </div>
      ))}
    </main>
  );
}

export default GadgetList;
