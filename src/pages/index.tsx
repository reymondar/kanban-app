import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Display from "../components/Display"
import TopBar from "../components/TopBar"

const IndexPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const handleClick = () => {
    setSidebarVisible(prev => !prev)
  }

  return (
    <>
      <div className="h-screen max-h-full">
        <StaticImage
          src="../assets/logo-dark.svg"
          className="absolute md:top-7 md:left-7"
        />
        <TopBar />
        <div className="flex h-full">
          {sidebarVisible ? (
            <Sidebar setSideBar={setSidebarVisible} />
          ) : (
            <div
              onClick={handleClick}
              className="absolute flex place-content-center bottom-12 left-0 bg-violet-800 px-6 py-4 rounded-r-3xl hover:cursor-pointer"
            >
              <StaticImage
                src="../assets/icon-hide-sidebar.svg"
                className="fill-white"
              />
            </div>
          )}
          <Display />
        </div>
      </div>
    </>
  )
}



export default IndexPage

