import StudentList from "./Components/StudentList";
import Header from "./Components/Header.jsx";
import data from "./data/data.json"

function App() {


  return (
    <div>
   
      <Header />
      
      <StudentList
      data={data} />


    </div>
  );
}

export default App;
