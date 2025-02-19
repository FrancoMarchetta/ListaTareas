import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/ListTextArea.tsx"
import ListTextArea from './components/ListTextArea.tsx';


function App() {
  

  return (
    <>
    <br />

    <main style={{
      display:"flex",
      placeContent:"center"
    }} >
      <div id="MainBox">

         <strong style={{fontSize:"40px"}}>
         Task-Brotha...
        </strong> 




        <div style={{marginTop:"3rem", display:"flex", margin:"70px 0px 70px 40px"}}>
            <ListTextArea></ListTextArea>
        </div>

    
      </div>
        

    </main>
    </>
  )
}

export default App
