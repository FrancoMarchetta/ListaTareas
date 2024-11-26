import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/ListTextArea.tsx"
import ListTextArea from './components/ListTextArea.tsx';


function App() {
  

  return (
    <>
    <br />
    <main id="MainBox">
         <strong style={{fontSize:"40px"}}>
         Lista de Tareas
        </strong> 


        <div style={{marginTop:"3rem", display:"flex", margin:"70px 0px 70px 40px"}}>
            <ListTextArea></ListTextArea>
        </div>

    
        

    </main>
    </>
  )
}

export default App
