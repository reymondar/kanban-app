import React, { useState , useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import Tasks from "./Tasks"
import { BoardContext } from "../context/BoardContext"


export default function Display({boards , boardsManager}: any) {

  console.log(boards, boardsManager)
  const [sidebarVisible, setSidebarVisible] = useState(true)

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
            <Sidebar setSideBar={setSidebarVisible} boardsManager={boardsManager} />
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
            <Tasks title="kit surf" subtasks="kit surfs" />
            <div className="flex place-content-center place-items-center mt-10 bg-gray-white rounded-xl hover:cursor-pointer">    
              <p className="text-light-gray text-2xl font-bold">+ New Column</p>
            </div>
          </div>
        </div>
      </div>
  )

}
