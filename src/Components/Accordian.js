import React from "react";
import ListItems from "./ListItems";
const Accordian = ({title,open,setOpen}) => {
    
    const showItemList=()=>{
        setOpen();
    }
    return (
        <div className="my-2 shadow-md border border-gray-100 px-4 py-2 rounded-md w-64">
            <div className="flex justify-between  ">
                <h1>{title}</h1>
                <button onClick={showItemList} className="bg-black text-white px-2 rounded-md">Show</button>
            </div>
            {
                open&& <ListItems/>
            }
        
        </div>
    )
};
export default Accordian;