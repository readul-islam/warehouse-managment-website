
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const InventoryDetails = () => {
  const { id } = useParams();
  console.log(id)
  
  
  

  return (
   <>
   <div className="w-screen ">
      <div className="w-full grid grid-cols-4 lg:px-24 ">
        <div>
          <div className="flex flex-col font-semibold  mt-8">
            <div
             
              className="flex items-center "
            > 
          <input
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="title"
                  placeholder="add" required
                />
            
             
            </div>
            <p  className="flex items-center space-x-2 mt-7">
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Add quantity
            </button>
            
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Delivered
            </button>
           
            </p>
          </div>
        </div>
        <div className="  col-span-3 bg-[#F4F7FC]">
        <div className=" px-8  mt-8 w-full h-[100vh]">
            </div>
          
        </div>
      </div>
    </div>
   
   </>
  );
};

export default InventoryDetails;
