import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function TopBar() {
  return (
    <div className="flex h-10% justify-between px-10 py-4 md:pl-60 lg:pl-80 border-solid border-b-2 border-white-azure">
      <h1 className="m-0 self-center text-3xl font-bold font-sans">
        Platform Launch
      </h1>
      <div className="flex">
        <button className="bg-main-violet px-6 py-3 rounded-3xl self-center text-white font-semibold">
          + Add New Task
        </button>
        <StaticImage
          src="../assets/icon-vertical-ellipsis.svg"
          className="self-center mx-4 hover:cursor-pointer"
          alt="logo"
        />
      </div>
    </div>
  )
}
