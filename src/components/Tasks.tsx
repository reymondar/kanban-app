import React from "react"

//modify
type columns = {
  title: string,
  subtasks: string
}

export default function Tasks({ title, subtasks }: columns) {
  return (
    <div>
      <h1 className="font-semibold tracking-wider text-light-gray mb-6">
        TODO ( 0 )
      </h1>
      <div className="px-4 py-7 mb-6 border-solid bg-white rounded-xl drop-shadow-md hover:cursor-pointer">
        <h4 className="text-black font-bold text-xl">{title}</h4>
        <p className="m-0 font-semibold text-light-gray">{subtasks}</p>
      </div>
    </div>
  )
}
