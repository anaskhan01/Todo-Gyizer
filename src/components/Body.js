import Addtodo from './Addtodo';
import './Body.css';
import React from "react";
import Todolist from './Todolist';

const Body = () => {
    const [todos, setTodos] = React.useState([
        {
            heading: "Gym",
            subhead: "Go to gym"
        },
        {
            heading: "Grocery",
            subhead: "grocery shopping"
        },
        {
            heading: "Grocery",
            subhead: "grocery shopping"
        }
    ]);

    const addTodo = (heading, subhead) => {
        const newTodos = [...todos, { heading, subhead }];
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = index => {
        
    }

    return <div className='body'>
        <Addtodo addTodo={addTodo} />
        <div className="t-container">
            {todos.map((e, i) => {
                return (
                    <Todolist
                        key={i}
                        head={e.heading}
                        sub={e.subhead}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                );
            })}
        </div>
    </div>
}

export default Body;