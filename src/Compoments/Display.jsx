import React, { useEffect, useState } from "react";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Display() {
  const [text, setText] = useState(" ");
  const [data, setData] = useState([]);

  const showData = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    if (text === "") {
      // alert("Please provided data");
      toast.error("Please Provide Value", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else  {
      setData([...data, { name: text }]);
      setText('')
      toast.success("Item Added To The List", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
    }
  };
  const deleteBtn = (e) => {
    // alert("Item Delete");
    toast.success("Item Delete", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const value = data.filter((num, i) => {
      return e != i;
    });
    setData(value);
  };

 useEffect(()=>{
  let save = JSON.parse(localStorage.getItem("saveass"));
  if(save){
    setText(save)
  }
 },[])

 useEffect(()=>{
  localStorage.setItem("saveass" , JSON.stringify(data))
 },[data])

  return (
    <div>
      <div className="text-center w-[40%] border mx-auto mt-40 shadow hover:shadow-lg rounded-md">
        <h3 className="text-3xl ">Grocery Bud</h3>
        <div className="p-6  ">
          <input
            type="text"
            name=""
            id=""
            className="border px-4   rounded-l-md "
            value={text}
            onChange={showData}
          />
          <button
            type="submit"
            className="bg-[#06b6d4] border px-4 text-white  text-xl rounded-r-md"
            onClick={addItem}
          >
            Add Item
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
        {data.map((e, i) => {
          return <Item key={i} name={e.name} id={i} deleteBtn={deleteBtn} />;
        })}
      </div>
    </div>
  );
}

export default Display;
