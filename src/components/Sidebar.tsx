import React , { useState , useContext, Dispatch, SetStateAction } from "react"
import { StaticImage } from "gatsby-plugin-image"
import AddBoard from "./Modals/AddBoard"
import { BoardContext , BoardManagerContext } from "../context/BoardContext"

type SidebarProps = {
  setSideBar: Dispatch<SetStateAction<boolean>>,
  setBoard: Dispatch<SetStateAction<string>>
}

type BoardBtnProps = {
  title: string,
  name: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const BoardBtn = ({title, name , onClick}: BoardBtnProps) => {
  return (
    <button className="flex w-full text-gray-400 font-semibold px-2 py-3 border-solid rounded-r-3xl active:bg-main-violet active:text-white hover:cursor-pointer"
            onClick={onClick}
            name={name}
    >
            <StaticImage
              src="../assets/icon-board.svg"
              className="self-center mx-4"
              alt="board"
            />
     {title}
    </button>
  )
}


const Sidebar = ({ setSideBar , setBoard }: SidebarProps) => {
 
 const [modal, setModal] = useState<boolean>(false)
 const boards = useContext(BoardContext)

  const boardsArray = Object.values(boards)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setBoard(target.name)
  }

  return (
    <>
      <div className="flex flex-col justify-between w-full md:w-1/3 lg:w-1/6  h-90% py-10 pr-4 box-border border-solid border-r-2 border-white-gray z-10">
        <div>
          <p className="text-gray-400 text-xs tracking-widest font-semibold ml-6">
            ALL BOARDS ( {boardsArray.length} )
          </p>
          {boardsArray?.length > 0 && boardsArray.map((board) => {
            return <BoardBtn title={board.title} name={board.title} onClick={handleClick} />
          })}
          <BoardBtn title="+ Create New Board" name="creator" onClick={() => setModal(prev => !prev)} />
        </div>
        <div>
          <div className="flex justify-center w-5/6 bg-white-azure rounded-lg py-2 m-auto my-4">
            <StaticImage
              src="../assets/icon-light-theme.svg"
              className="self-center mx-4"
              alt="board"
            />
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <StaticImage
              src="../assets/icon-dark-theme.svg"
              className="self-center mx-4"
              alt="board"
            />
          </div>
          <button
            onClick={() => setSideBar(prev => !prev)}
            className="flex w-full text-gray-400 font-semibold px-2  py-3 border-solid rounded-r-3xl active:bg-violet-800 active:text-white hover:cursor-pointer"
          >
            <StaticImage
              src="../assets/icon-hide-sidebar.svg"
              className="self-center mx-4"
              alt="board"
            />
            Hide Sidebar
          </button>
        </div>
        {modal && <AddBoard setModal={setModal} />}
      </div>
    </>
  )
}


export default Sidebar