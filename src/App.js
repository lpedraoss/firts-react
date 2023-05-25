import logo from './logo.svg';
import './App.css';



import User from './hooks/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<Greetings name = "Luis Suarez"></Greetings>*/}
        {/* <GreetingsF name={"Alfonso suarex"}></GreetingsF> */}
        {/* componente del listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplos de usos de hooks */}
        {/* <Ejemplo></Ejemplo> */}
        <User></User>
      </header>
    </div>
  );
}

export default App;
