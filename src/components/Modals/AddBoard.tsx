import { StaticImage } from 'gatsby-plugin-image'
import React , { useReducer , useState } from 'react'


type addBoardProps = {
    setModal: (o: boolean | ((prev: boolean) => boolean)) => void
    boardDispatch: () => void
}


type State = (string | undefined)[]

type Action = {
    type: string,
    payload: string,
    value?: string
}

const initialState: State = ['']

const reducer = (tasks: string[], action: Action): State => {
    switch(action?.type){ 
        case "add": {
           return [...tasks, '']
        }
        case "modify": {
           const index = Number(action.payload)
           return tasks.map((input,i) => {
                if(i == index) return action.value
                else return input
            })
        }
        case "delete": {
            return tasks.filter((el,i) => i !== Number(action.payload))
        }
        case 'clear': {
            return []
        }
        default: {
            return tasks
        }
    }
}


const AddBoard = ({setModal , boardDispatch }: addBoardProps) => {

    const [title, setTitle] = useState<string>("")
    const [tasks, dispatch] = useReducer(reducer, initialState)

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target?.id === 'container') return setModal((prev: boolean) => !prev)
    }

    const handleAdd = () => dispatch({type: 'add', 'payload': []})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'modify', payload: e.target.name, value: e.target.value})
    
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if(e.target?.tagName == "IMG") dispatch({"type": "delete", 'payload': e.currentTarget.id})
    }

    const handleBoardTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    
    const handleBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
        boardDispatch({'type':'new board', 'payload': [title, tasks]})
        dispatch({type:'clear', payload: []})
        
        setModal(prev => !prev)
        setTitle('')
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
                value={title} />
            </div>
            <div>
                <p className="mt-4 text-light-gray font-semibold">Columns</p>
                {tasks.map(( text: string, i: number ) => {
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
                >Create New Board</button>
        </div>
      </div>
    )
  }

  
export default AddBoard 