import React, { useReducer } from 'react'

type stateBoards = {
    title: string,
    tasks: string[]
  
}  

type State = stateBoards[]
  
type Actions = 
| {type: "NEW_BOARD", payload: {title: string, tasks: string[]} }
  
const reducer = (boards: State = initialState, action: Actions): State => {
switch(action.type) {
    case "NEW_BOARD": {
    const { title , tasks} = action.payload;
    return [
      ...boards,
      {
        title,
        tasks
    }]
    }
    default: 
    return boards
}
}


const initialState: State = []
  

const BoardContext = React.createContext(initialState);
const BoardManagerContext = React.createContext<React.Dispatch<Actions> | null>(null)

const BoardProvider: React.FC = ({children}: any) => {
    
    const [boards, boardsManager] = useReducer(reducer, initialState)   

    
  return (
    <BoardContext.Provider value={boards}>
      <BoardManagerContext.Provider value={boardsManager}>
      {children}
      </BoardManagerContext.Provider>
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardManagerContext , BoardProvider };


