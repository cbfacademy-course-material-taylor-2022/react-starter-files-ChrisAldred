import React, { Fragment , useState} from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';

const taskList = [
  {"id":"task1","title":"Buy Milk","isComplete":true},
  {"id":"task2","title":"Read a book","isComplete":false},
  {"id":"task3","title":"Early morning run","isComplete":false},
  {"id":"task4","title":"Drink water","isComplete":false},
  {"id":"task5","title":"Visit the puppy shelter","isComplete":true},
  {"id":"task6","title":"Watch Bad Sisters","isComplete":false}
];

function App() {
  
  function toggleComplete(id){
    setTasks(
      taskList.map(task => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  }
  const [tasks, setTasks] = useState(taskList);

  return (
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
          {tasks.sort((a,b) => (a.isComplete  - b.isComplete))
                .map(task => 
                  <Task key={task.id} toggleComplete={toggleComplete} id={task.id} title={task.title} isComplete={task.isComplete}/>
                )}
          {/*<Task id="task1" title="Buy Milk" isComplete={true}/>
          <Task id="task2" title="Read a book" isComplete={false}/>
          <Task id="task3" title="Early morning run" isComplete={false}/>*/}
        </TaskContainer>
      </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);