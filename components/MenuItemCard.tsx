'use client'

interface Props {
  item: any
  onAdd: (item: any) => void
}

export default function MenuItemCard({ item, onAdd }: Props) {

  return (
    <div className="glass rounded-xl p-3 flex justify-between items-center hover:scale-[1.02] transition">

      <div>
        <p className="text-white font-medium">
          {item.name}
        </p>

        <p className="text-sm text-slate-400">
          ₹{item.price}
        </p>
      </div>

      <button
        onClick={() => onAdd(item)}
        className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm"
      >
        Add
      </button>

    </div>
  )
}