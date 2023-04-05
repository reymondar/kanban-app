import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState , useReducer} from "react"
import Sidebar from "../components/Sidebar"
import Display from "../components/Display"
import TopBar from "../components/TopBar"

type State = {
  [title: string]: {
    title: string,
    tasks: string[]
  }
} 

type Actions = 
  | {type: "NEW_BOARD", payload: {boardID:string, title: string, tasks: string[]} }

const reducer = (state: State, action: Actions): State => {
  switch(action.type) {
    case "NEW_BOARD": {
      const { title , tasks} = action.payload;
      return {
        ...state,
          [title]: {
          title,
          tasks
        }
      }
    }
    default: 
      return state
  }
}

const initialState = JSON.parse(localStorage.getItem('boards') ?? "null") ?? {}

const IndexPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  const stateArray = Object.values(state)

  console.log(stateArray)
  const handleClick = () => {
    setSidebarVisible(prev => !prev)
  }

  return (
    <>
    <React.StrictMode>
      <div className="h-screen overflow-hidden">
        <StaticImage
          src="../assets/logo-dark.svg"
          alt="boards"
          className="absolute md:top-7 md:left-7"
        />
        <TopBar />
        <div className="flex h-full">
          {sidebarVisible ? (
            <Sidebar setSideBar={setSidebarVisible} boards={stateArray} dispatch={dispatch} />
          ) : (
            <div
              onClick={handleClick}
              className="absolute flex place-content-center bottom-12 left-0 bg-violet-800 px-6 py-4 rounded-r-3xl hover:cursor-pointer"
            >
              <StaticImage
                src="../assets/icon-hide-sidebar.svg"
                alt="boards"
                className="fill-white"
              />
            </div>
          )}
          <Display boards={stateArray} dispatch={dispatch} />
        </div>
      </div>
      </React.StrictMode>
    </>
  )
}



export default IndexPage

