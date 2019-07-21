import React, {Component} from 'react';

class TodoInput extends Component {
    state = {  }
    render() { 
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return ( 
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Add todo item" 
                            value={item}
                            onChange={handleChange}
                        /> 
                    </div>
                    <button type="submit" className={editItem ? "btn btn-success btn-block mt-3" : "btn btn-primary btn-block mt-3"}>
                        {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form>
            </div>
        );
    }
}
 
export default TodoInput;