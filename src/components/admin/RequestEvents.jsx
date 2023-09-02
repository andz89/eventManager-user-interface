import React from 'react'
import { FaPlus } from "react-icons/fa";
const RequestEvents = () => {
  return (
    <>
     <span className='m-3 flex    bg-warning items-center p-1 w-[190px] gap-2'>
        <span className='text-xl font-semibold   p-1 rounded text-slate-800'>Request Events
   
        </span>
        <span className="inline-flex items-center justify-center w-auto h-auto p-1   text-sm font-semibold text-blue-800 bg-blue-200 rounded-full">
   21
  </span>
        </span>
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
                    pending
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
                    Dagan Batang Surigaonon
                </th>
                <td className="px-6 py-4">
                  03/23/24
                </td>
                <td className="px-6 py-4">
                02/23/23
                </td>
           
                <td className="px-6 py-4">
                John Macario
                </td>
               
                <td className="px-6 py-4">
                pending
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                <div className="bg-success text-white p-1 rounded font-semibold hover:bg-green-700 cursor-pointer">Approve</div>

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
                    Kainan sa Barangay
                </th>
                <td className="px-6 py-4">
                    12/08/23
                </td>
                <td className="px-6 py-4">
                11/04/23
                </td>
                
                <td className="px-6 py-4">
                   Kaila Danao
                </td>
                <td className="px-6 py-4">
                pending
                </td>
                <td className="flex items-center px-6 py-4 space-x-3">
                <div className="bg-success text-white p-1 rounded font-semibold hover:bg-green-700 cursor-pointer">Approve</div>

                
                </td>
            </tr>
             
 
      
        
  
        </tbody>
    </table>
</div>

    </>
  )
}

export default RequestEvents
