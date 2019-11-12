import React from 'react';
import {connect} from 'react-redux';
import './App.css';

let test: string = '1234';
let test2: number = 1234;

// const App: React.FC = () => {
//   console.log('APP');
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!!!{test}
//           <br/>{test2}
//         </a>
//       </header>
//     </div>
//   );
// }

// объявляем интерфейс IProps
// ? - параметр необязательный - может быть undefined
interface IProps {
  name?: string;
  counter: number;
}

const App: React.SFC<IProps> = (props: IProps) => {
  console.log('APP', props);
  return (
    <div>
      <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
      <p>
        Learn React!!!{test}
        <br/>{test2}    
      </p>
    </div>
  )
};

// переносим State (или его часть) в props компонента
function mapStateToProps(state) {
  return {
    counter: state.counter,
    name: state.name,
  }
}

// добавляем функции (обработчики) в props компонента
function mapDispatchToProps(dispatch) {
  return {
    //onAdd: () => dispatch(add()),
    //onSub: () => dispatch(sub()),
    //onPow: () => dispatch({type: 'POW'}), // action не вынесен в папку
    //onRes: () => dispatch({type: 'RES'}), // action не вынесен в папку
    //onAddNum: number => dispatch(addNum(number)),
  }
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//export default connect()(App);
