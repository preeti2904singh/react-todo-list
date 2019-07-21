import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between mt-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}> <i className="fa fa-edit"></i> </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}> <i className="fa fa-trash"></i> </span>    
                </div> 
            </li>
        )
    }
}

export default TodoItem;