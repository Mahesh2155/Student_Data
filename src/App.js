import { useState } from "react";
import List from "./Components/List";
import Search from "./Components/Search";
import Task from "./StudentsData.json";
import "./App.css";
function App() {
    const [list, SetList] = useState([]);
    return (
        <div className="App">
            <Search List={Task} setList={SetList} />
            <List list={list} />
        </div>
    );
}

export default App;
