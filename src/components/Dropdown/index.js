import react, { useRef, useState } from "react";
import Item from "../Item";

const Dropdown = () => {

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20px'
  }
  const [selectedItems, setSelectedItems] = useState([])
  const target = useRef('')

  return (
    <div className="dropdown">
      <h1>Dropdown</h1>
      <div>
        <input style={{ width: "200px" }} list="coinsDatalist" ref={target} size="1" name="Coin" />
        <button onClick={() => setSelectedItems([...selectedItems, target.current.value])}>Ok</button>
      </div>
      <datalist id="coinsDatalist">
        <option id="disabled" disabled>Select</option>
        <option id="bitcoin" value="Bitcoin">Bitcoin</option>
        <option id="rub" value="RUB">RUB</option>
        <option id="euro" value="Euro">Euro</option>
        <option id="dollar" value="Dollar">Dollar</option>
        <option id="litecoin" value="Litecoin">Litecoin</option>
      </datalist>
      <div className="selected" style={style}>
        {selectedItems ? selectedItems.map(item => <Item text={item} />) : <p> Select Items</p>}
      </div>
    </div>
  )
}

export default Dropdown;
