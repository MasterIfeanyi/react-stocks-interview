import React from 'react'


const TableData = ({item}) => {


  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
      <p className="symbol">{item.name}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className={item.price < 0 ? "text-danger price" : "text-success price"}>{item.price}</p>
      </td>
    </tr>
  )
}

export default TableData