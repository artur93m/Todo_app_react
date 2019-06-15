import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zakupy",
        date: "2019-06-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Zrobić pranie",
        date: "2019-06-16",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Posprzątać w mieszkaniu",
        date: "2019-06-17",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTast = id => {
    console.log("done");
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  };
  changeTaskStatus = id => {
    console.log("zrobione");
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTast}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
