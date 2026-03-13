'use client'

import { useState } from "react"
import { menuItems } from "@/data/menuData"
import MenuItemCard from "@/components/MenuItemCard"

export default function OrdersPage() {

  const [orderType, setOrderType] = useState("table")
  const [tableNumber, setTableNumber] = useState("")
  const [orderItems, setOrderItems] = useState<any[]>([])

  const addItem = (item: any) => {
    setOrderItems(prev => [...prev, item])
  }
  const removeItem = (index: number) => {
  setOrderItems(prev => prev.filter((_, i) => i !== index))
}
  const total = orderItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen px-6 py-10">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white mb-8">
        New Order
      </h1>

      {/* Order Type */}
      <div className="glass rounded-xl p-4 mb-8 flex gap-4 items-center">

        <label className="text-white font-semibold">
          Order Type
        </label>

        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="bg-slate-800 text-white p-2 rounded"
        >
          <option value="table">Table</option>
          <option value="takeaway">Takeaway</option>
        </select>

        {orderType === "table" && (
          <input
            type="number"
            placeholder="Table Number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="bg-slate-800 text-white p-2 rounded"
          />
        )}

      </div>

      {/* Menu Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">

        {menuItems.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAdd={addItem}
          />
        ))}

      </div>

      {/* Order Summary */}
      <div className="glass rounded-xl p-6 max-w-xl">

        <h2 className="text-xl font-bold text-white mb-4">
          Order Summary
        </h2>

        {orderItems.length === 0 && (
          <p className="text-slate-400">
            No items added yet
          </p>
        )}

        {orderItems.map((item, index) => (
  <div
    key={index}
    className="flex justify-between items-center text-slate-300 mb-2"
  >
    <span>{item.name}</span>

    <div className="flex items-center gap-3">
      <span>₹{item.price}</span>

      <button
        onClick={() => removeItem(index)}
        className="text-red-400 hover:text-red-300 text-sm"
      >
        Remove
      </button>
    </div>
  </div>
))}

        <div className="border-t border-slate-700 mt-4 pt-4 flex justify-between text-white font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

    </div>
  )
}