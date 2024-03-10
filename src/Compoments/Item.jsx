import React, { useState } from "react";

function Item({ name, id, deleteBtn }) {
    const[check , setCheck] = useState(false)
    const chackBox = () =>{
        setCheck((prev) => !prev);
        // console.log(e.target.value);
    }
  return (
    <div className="mb-4">
      <div className="flex justify-around">
        <div className="flex gap-5">
        <input type="checkbox" name="" id="" onChange={chackBox}  checked = {check} />
        <p style={{ textDecoration: check ? 'line-through' : 'none' }}>{name}</p>
        </div>
        <button
          className="bg-black text-white px-3 rounded"

          onClick={() => {
            deleteBtn(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
