import './Addtodo.css';
import add from '../assets/add.png'
import React from "react";

const Addtodo = ({addTodo}) => {

    const initialValues = {
        heading: "",
        subhead: ""
    };

    const [values, setValues] = React.useState(initialValues);

    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!values) return;
        addTodo(values.heading,values.subhead);
        setValues('')
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="addtodo">
                    <div className="form-horizontal">
                        <input name="heading" value={values.heading} onChange={handleChange} type="text" placeholder="Title..." className="text-field"></input>
                        <input name="subhead" value={values.subhead} onChange={handleChange} type="text" placeholder="Input..." className="text-field"></input>
                    </div>
                    <div>
                        <input type="image" name="submit" className="add-img" src={add} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Addtodo;