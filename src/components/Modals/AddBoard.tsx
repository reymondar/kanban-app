import { StaticImage } from 'gatsby-plugin-image'
import React , { useReducer , useContext } from 'react'
import { BoardManagerContext } from '../../context/BoardContext'

type addBoardProps = {
    setModal: (o: boolean | ((prev: boolean) => boolean)) => void
}

type State = {
    title: string,
    tasks: string[]
}

type Action = 
    | {type: "ADD_COLUMN", payload: string}
    | {type: "ADD_TITLE", payload: string}
    | {type: "MODIFY_COLUMN", payload: string, value: string}
    | {type: "DELETE_COLUMN", payload: string}
    | {type: "CLEAR_DATA"}

const initialState: State = {title: '', tasks: []}

const reducer = (state: State, action: Action): State => {
    switch(action?.type){ 
        case "ADD_COLUMN": {
            return {
                ...state,
                tasks: [...state.tasks , action.payload]
            }
        }
        case "ADD_TITLE" : {
            return {
                ...state,
                title: action.payload
            }
        }
        case "MODIFY_COLUMN": {
           const index = Number(action.payload)
           return {
            ...state,
            tasks:  state.tasks.map((input,i) => {
                if(i == index) return action.value
                else return input
            })
           }
        }
        case "DELETE_COLUMN": {
            return {
                ...state,
                tasks: state.tasks.filter((el,i) => i !== Number(action.payload))
            }  
        }
        case "CLEAR_DATA": {
            return {
                title: '',
                tasks: ['']
            }
        }
        default: {
            return state
        }
    }
}


const AddBoard = ({ setModal }: addBoardProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const boardsState = useContext(BoardManagerContext)

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        if(target.id === 'container') return setModal((prev: boolean) => !prev)
        //dispatch({type: "CLEAR_DATA"})
    }

    const handleAdd = () => dispatch({type: "ADD_COLUMN", 'payload': ''})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: "MODIFY_COLUMN", payload: e.target.name, value: e.target.value})
    
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement
        if(target.tagName == "IMG") dispatch({"type": "DELETE_COLUMN", 'payload': e.currentTarget.id})
    }

    const handleBoardTitle = (e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: "ADD_TITLE", payload: e.target.value})
    
    const handleBoard = () => {
        if (boardsState) boardsState(({type:"NEW_BOARD",payload: {title: state.title,tasks: state.tasks}}))
        dispatch({type:"CLEAR_DATA"}) 
        setModal(prev => !prev)
    }

    return(
    <div className="flex place-items-center place-content-center absolute top-0 right-0 w-screen h-screen bg-light-gray-op" onClick={closeModal} id="container">
        <div className="flex flex-col justify-between w-104 min-h-102 m-h-screen rounded-md p-8 bg-white">
            <h1 className="text-2xl font-bold font-sans">Add New Board</h1>
            <div>
                <p className="text-light-gray font-semibold">Name</p>
                <input 
                className='w-full rounded-md p-2 border-solid border-slate-400 b-1 border-2' 
                placeholder="e.g. web design"
                onChange={handleBoardTitle}
                value={state.title} />
            </div>
            <div>
                <p className="mt-4 text-light-gray font-semibold">Columns</p>
                {state.tasks.map(( text: string, i: number ) => {
                    return (
                    <div key={`${i}3`} id={`${i}`} className="flex place-content-center w-full mt-4" onClick={handleClick}>
                        <input className="w-full rounded-md p-2 border-solid border-slate-400 b-1 border-2" 
                        name={`${i}`} 
                        value={text} 
                        onChange={handleChange} />
                        <StaticImage 
                        src="../../assets/icon-cross.svg" 
                        alt='close' className="self-center mx-4 hover:cursor-pointer" 
                        />               
                    </div>)
                })}
                
                <button 
                className="w-full rounded-3xl p-2 my-4 bg-white-azure text-main-violet font-semibold"
                onClick={handleAdd}
                >+Add New Column</button>
              
            </div>
            <button 
                className="w-full rounded-3xl p-2 bg-main-violet text-white font-semibold"
                onClick={handleBoard}
                >Create New Board
            </button>
        </div>
      </div>
    )
  }

  
export default AddBoard 