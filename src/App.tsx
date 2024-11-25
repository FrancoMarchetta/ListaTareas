import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/ListTextArea.tsx"
import ListTextArea from './components/ListTextArea.tsx';
import Tareas from './components/Tareas.tsx';


function App() {
  
  let taskzone =  document.getElementById("taskZoneID");

  return (
    <>
    <br />
    <main id="MainBox">
         <strong style={{fontSize:"40px"}}>
         Lista de Tareas
        </strong> 

        <div style={{display:"flex",justifyContent:"space-between",margin:"50px 110px 50px 110px" }}>
            <h3>N° de tareas: 55</h3>
            <h3>Pendientes: 12</h3>
        </div>

        <div style={{marginTop:"3rem", display:"flex", margin:"70px 0px 70px 40px"}}>
            <ListTextArea></ListTextArea>
        </div>

    
        

    </main>
    </>
  )
}

export default App
