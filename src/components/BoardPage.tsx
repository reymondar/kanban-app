import React, { useState , useContext , useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import Tasks from "./Tasks"
import { BoardContext } from "../context/BoardContext"

type Items = {
  title: string,
  tasks: string[]
}

export default function Display() {

  const [actualBoard, setBoard] = useState<string>("")
  const [selectedBoard, setSelectedBoard] =useState<Items[]>([])
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const Boards = useContext(BoardContext)

  const [ board ] = Boards.filter(board => board.title === actualBoard)

  return (
      <div className="h-screen overflow-hidden">
        <StaticImage
          src="../assets/logo-dark.svg"
          alt="boards"
          className="absolute md:top-7 md:left-7"
        />
        <TopBar />
        <div className="flex h-full">
          {sidebarVisible ? (
            <Sidebar setSideBar={setSidebarVisible} setBoard={setBoard} />
          ) : (
            <div
              onClick={() => setSidebarVisible(prev => !prev)}
              className="absolute flex place-content-center bottom-12 left-0 bg-violet-800 px-6 py-4 rounded-r-3xl hover:cursor-pointer"
            >
              <StaticImage
                src="../assets/icon-hide-sidebar.svg"
                alt="boards"
                className="fill-white"
              />
            </div>
          )}
          <div className="w-full h-90% p-6 grid grid-cols-1-28 grid-row-1 auto-cols-1-28 grid-flow-col gap-x-6 overflow-x-scroll bg-white-azure">
            {board && board.tasks.map((task, i) => {
              return <Tasks key={i} title={task} subtasks="" />
            })}
            <div className="flex place-content-center place-items-center mt-10 bg-gray-white rounded-xl hover:cursor-pointer">    
              <p className="text-light-gray text-2xl font-bold">+ New Column</p>
            </div>
          </div>
        </div>
      </div>
  )

}
