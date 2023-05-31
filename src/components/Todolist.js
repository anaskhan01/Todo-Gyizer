import './Todolist.css'
import i from '../assets/i.png'
import cross from '../assets/cross.png'
import edit from '../assets/edit.png'
import React from "react";

const Todolist = (props) =>{
    let [isClicked, setClicked] = React.useState(true);

    const showButtons = () => {
        setClicked(!isClicked);
    }

    return(
        <div className="tasks">
            <div className="t-textbox">
                <p className="t-head">{props.head}</p>
                <p className="t-subhead">{props.sub}</p>
            </div>
            <div>
                {isClicked?
                (<input type="image" name="button" src={i} className='i' onClick={showButtons}/>)
                :
                (<div>
                <input type="image" name="submit" src={edit} className='i' onClick={props.editTodo}/>
                <input type="image" name="submit" src={cross} className='i' onClick={props.removeTodo}/>
                </div>)
            }
            </div>
        </div>
    );
}

export default Todolist;