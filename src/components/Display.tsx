import React from "react"
import Board from "./Board"

export default function Display() {
  return (
    <div className="w-full h-90% p-6 grid grid-cols-1-28 grid-row-1 auto-cols-1-28 grid-flow-col gap-x-6 overflow-x-scroll bg-white-azure">
      <Board />
      <div className="flex place-content-center place-items-center mt-10 bg-gray-white rounded-xl hover:cursor-pointer">    
        <p className="text-light-gray text-2xl font-bold">+ New Column</p>
      </div>
    </div>
  )
}
