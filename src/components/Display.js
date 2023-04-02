import React from "react"
import Project from "./Projects"

export default function Display() {
  return (
    <div className="w-full h-full p-6 grid grid-cols-1-28 grid-row-1 auto-cols-1-28 grid-flow-col gap-x-6 overflow-x-scroll bg-white-azure">
      <Project />
      <div className="flex place-content-center place-items-center mt-10 bg-gray-white rounded-xl hover:cursor-pointer">
        <p className="text-light-gray text-2xl font-bold">+ New Column</p>
      </div>
    </div>
  )
}
