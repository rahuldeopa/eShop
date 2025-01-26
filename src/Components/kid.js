import Accordian from "./Accordian";
import { useState } from "react";
const Kid = () => {
    const [open, setOpen] = useState(null);
    return (
        <div className="max-w-6xl mx-auto ">
            <h1 className=" mt-10 font-bold text-xl mb-5">Filter Options</h1>
            {
                ["Brand", "Mens", "Gender", "Kids"].map((title, index) => 
                <Accordian 
                key={index} 
                title={title} 
                open={index=== open?true:false}
                setOpen={()=>setOpen(index)}
                />)
            }
        </div>

    );
};
export default Kid;