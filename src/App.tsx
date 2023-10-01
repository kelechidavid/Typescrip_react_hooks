import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App



// import {useReducer, ChangeEvent, ReactNode } from 'react'

// const initState = { count: 0, text: ''}

// const enum REDUCER_ACTION_TYPE {
//   INCREMENT,
//   DECREMENT,
//   NEW_INPUT,  
// }

// type ReducerAction = {
//   type: REDUCER_ACTION_TYPE,
//   payload?: string,
// }

// const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
//   switch (action.type) {
//     case REDUCER_ACTION_TYPE.INCREMENT:
//       return {...state, count: state.count + 1}
//     case REDUCER_ACTION_TYPE.DECREMENT: 
//       return {...state, count: state.count - 1}
//     case REDUCER_ACTION_TYPE.NEW_INPUT: 
//       return {...state, text: action.payload ?? ''}
//     default: 
//       throw new Error("Unknown action");
//   }
// }

// type ChildrenType = {
//   children: (num: number) => ReactNode
// }

// // interface User {
// //   id: number,
// //   username: string,
// // }

// // type fibFun = (n: number) => number;

// // const fib: fibFun = (n) => {
// //   if (n < 2) return n
// //   return fib(n - 1) + fib(n - 2)
// // }

// // const myNum: number = 20
  



// function App ({children}: ChildrenType):  {
//   // const [count, setCount] = useState<number>(0)
//   // const [users, setUsers] = useState<User | null>(null)

//   // useEffect (() => {
//   //   console.log(`Mounting ${users}`)
//   //   console.log('Users: ', users)

//   //   return console.log(`Unmounting ${users}`)
//   // }, [users])

//   // const addTwo = useCallback ((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])
//   // const result = useMemo<number>(() => fib(myNum), [myNum])

//   // let ref = useRef(0);

//   // function handleClick() {
//   //   ref.current = ref.current + 1;
//   //   alert('You clicked ' + ref.current + ' times!');
//   // }

//   const increment = () => dispatch ({type: REDUCER_ACTION_TYPE.INCREMENT})
//   const decrement = () => dispatch ({type: REDUCER_ACTION_TYPE.DECREMENT})
//   const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => dispatch ({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value})

//   return (
//     <>
//       <h1>{children(state.count)}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <h2>{state.text}</h2>

//     <button onClick={handleClick}>
//       Click me!
//     </button>
//     <input type="text" onChange={handleTextInput}/>
//     <h2>{state.text}</h2>
//     </>
//   )
// }

// export default App
