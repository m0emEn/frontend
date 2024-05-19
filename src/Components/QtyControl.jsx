import { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
const QtyControl = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="qtyControl">
      <div className="qtyBtn qtyDecr">
        <button className="decrBtn" onClick={() => qty > 1 && setQty(qty - 1)}>
          <TiMinus />
        </button>
      </div>
      <div className="qtyValue">
        <p>{qty}</p>
      </div>
      <div className="qtyBtn qtyIecr">
        <button className="decrItn" onClick={() => setQty(qty + 1)}>
          <MdAdd size={16} />
        </button>
      </div>
    </div>
  );
};

export default QtyControl;
