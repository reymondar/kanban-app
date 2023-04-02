import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Sidebar({ setSideBar }) {
  const handleClick = () => setSideBar()
  return (
    <>
      <div className="flex flex-col justify-between w-full md:w-1/3 lg:w-1/6 py-10 pr-4 box-border border-solid border-r-2 border-white-gray z-10">
        <div>
          <p className="text-gray-400 text-xs tracking-widest font-semibold ml-6">
            ALL BOARDS ( 3 )
          </p>
          <button className="flex w-full text-gray-400 font-semibold px-2 py-3 border-solid rounded-r-3xl active:bg-main-violet active:text-white hover:cursor-pointer">
            <StaticImage
              src="../ass"
              className="self-center mx-4"
            />
            Platform Launch
          </button>
          <button className=" flex w-full text-gray-400 font-semibold px-2 py-3 border-solid rounded-r-3xl active:bg-main-violet active:text-white hover:cursor-pointer">
            <StaticImage
              src="../assets/icon-board.svg"
              className="self-center mx-4"
            /> 
            + Create New board
          </button>
        </div>
        <div>
          <div className="flex justify-center w-5/6 bg-white-azure rounded-lg py-2 m-auto my-4">
            <StaticImage
              src="../assets/icon-light-theme.svg"
              className="self-center mx-4"
            />
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <StaticImage
              src="../assets/icon-dark-theme.svg"
              className="self-center mx-4"
            />
          </div>
          <button
            onClick={handleClick}
            className="flex w-full text-gray-400 font-semibold px-2  py-3 border-solid rounded-r-3xl active:bg-violet-800 active:text-white hover:cursor-pointer"
          >
            <StaticImage
              src="../assets/icon-hide-sidebar.svg"
              className="self-center mx-4"
            />
            Hide Sidebar
          </button>
        </div>
      </div>
    </>
  )
}
