import React from 'react'
import { FaPlus } from "react-icons/fa";
const Events = () => {
  return (
    <>
     <div className='m-3 flex justify-between items-center'>
        <span className='text-xl font-semibold   bg-secondary p-2 rounded  '>Events      <span className="ml-1 inline-flex items-center justify-center w-auto h-auto p-1   text-sm font-semibold text-blue-800 bg-blue-200 rounded-full">
   125
  </span></span>
   
        {/* <span className='text-xl font-semibold   bg-primary p-2 rounded  '><FaPlus className='text-light ' /></span> */}
        
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="flex gap-2">
        
        <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Events..." required />
        <button type="submit" className="text-white    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

        </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 ">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Date of Event
                </th>
                <th scope="col" className="px-6 py-3">
                   Date of Approve
                </th>
           
                <th scope="col" className="px-6 py-3">
                   Event Coordinator
                </th>
                <th scope="col" className="px-6 py-3">
                   Status
                </th>
                
                
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Mayors Cup Basketball Surigao"
                </th>
                <td className="px-6 py-4">
                    02/12/2023
                </td>
                <td className="px-6 py-4">
                02/2/2023
                </td>
              
                <td className="px-6 py-4">
                    Rick A. Baltazar
                </td>
               
                <td className="px-6 py-4">
                  active
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                <div   className="bg-danger text-white p-1 rounded font-semibold hover:bg-rose-500 cursor-pointer">Disable</div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sayaw Surigao 2023
                </th>
                <td className="px-6 py-4">
                   11/02/23
                </td>
                <td className="px-6 py-4">
                10/22/23
                </td>
              
                <td className="px-6 py-4">
                    Marimar T. Makatao
                </td>
                <td className="px-6 py-4">
                  active
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                <div  className="bg-danger text-white p-1 rounded font-semibold hover:bg-rose-500 cursor-pointer">Disable</div>
                
                </td>
            </tr>
             
 
      
        
  
        </tbody>
    </table>
</div>

    </>
  )
}

export default Events
