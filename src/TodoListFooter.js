import React from 'react';
import './App.css';

class TodoListFooter extends React.Component {
    state = {
        isHidden: false
    }
    render = (props) => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                <button onClick={ () => { this.props.onFilterChanged("All") } } className={classForAll}>All</button>
                <button onClick={ () => { this.props.onFilterChanged("Completed") } } className={classForCompleted}>Completed</button>
                <button onClick={ () => { this.props.onFilterChanged("Active") } } className={classForActive}>Active</button>
                {!this.state.isHidden &&
                <span onClick={()=>{this.setState({isHidden: true})}}>hide</span>}
                {this.state.isHidden &&
                <span onClick={() =>{this.setState({isHidden: false})}}>show</span>}

            </div>

        );
    }
}

export default TodoListFooter;

