import react from 'react';

const style = {
  backgroundColor: 'yellowgreen',
  borderRadius: '4px',
  fontSize: '13px',
  padding: '3px',
  marginLeft: '5px',
  marginRight: '5px',
  marginTop: 0,
  marginBottom: 0,

}

const Item = (props = { text: '' }) => {
  console.log(props.text);
  return (
    <p style={style}>{props.text}</p>
  )
}

export default Item;
