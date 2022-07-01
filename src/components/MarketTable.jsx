import React from 'react'

const MarketTable = ({item}) => {
  return (
      <tr>
          <td className="px-6 py-4 whitespace-nowrap">
              <p className="symbol">{item.base_currency}/{item.quote_currency}</p>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
              <p className={item.bid < 0 ? "text-danger price" : "text-success price"}>{item.bid}</p>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
              <p className={item.ask < 0 ? "text-danger price" : "text-success price"}>{item.ask}</p>
          </td>
      </tr>
  )
}

export default MarketTable