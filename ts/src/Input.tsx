import React, { useReducer } from "react";

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
  { id: 3, name: "Kiwi" },
  { id: 4, name: "Banana" },
];

const Input = () => {
  type Actions =
    | { type: "add"; value: string }
    | { type: "remove"; id: number };

  type Todos = {
    id: number;
    name: string;
  };

  type State = Todos[];
  const [state, dispatch] = useReducer((state: State, action: Actions) => {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length + 1, name: action.value }];
      case "remove":
        let res = state.filter((value) => value.id !== action.id);
        return res;
      default:
        return state;
    }
  }, fruits);

  return (
    <div>
      {state.map((value) => {
        return (
          <h3 key={value.id}>
            {value.id} - {value.name}
          </h3>
        );
      })}
      <button onClick={() => dispatch({ type: "add", value: "grapes" })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "remove", id: 1 })}>
        delete Apple
      </button>
    </div>
  );
};

export default Input;

// import React, {useRef} from 'react';

// const Input = () => {

//     const btnRef = useRef<HTMLButtonElement>(null)
//     const inpRef = useRef<HTMLInputElement>(null)
//   return (
//     <div>
//         <button ref={btnRef}>button</button>
//         <input ref={inpRef} type="text" />
//     </div>
//   )
// }

// export default Input;

// import React, { ReactNode, useState } from "react";

// interface Props  {
//   value: string;
//   title?: string;
//   onChange(e:React.MouseEvent): void;
//   children: ReactNode;
// }

// type state = string | number

// // const Input = ({title, value}: Props) => {
// const Input: React.FC<Props> = (props) => {

//     const [count, setCount] = useState<state>(0)

//   return (
//     <div onClick={(e) => props.onChange(e)}>
//       <h1>
//         {props.value} {props.title}
//       </h1>
//       {props.children}
//       <button onClick={() => setCount('web')}>change to str{count}</button>
//       <button onClick={() => setCount(1234)}>change to num{count}</button>
//     </div>
//   );
// };

// export default Input;
