import React, { Component } from 'react'
import TodoBD from './TodoBD';
import TodoFT from './TodoFT';
import TodoHD from './TodoHD';


class Root extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 1, title: "task1", done: false },
                { id: 2, title: "task2", done: false },
                { id: 3, title: "task3", done: true },
                { id: 4, title: "task4", done: false },
                { id: 5, title: "task5", done: true },
                { id: 6, title: "task6", done: false }
            ],
            type: 1
        }
    }
    render() {
        return (
            <div>
                <TodoHD addTodo={this.addItem.bind(this)}/>
                <TodoBD todoList={this.state.todos}
                    updateItem={this.updateItem.bind(this)}
                    deleteItem={this.deleteItem.bind(this)}
                    showType={this.state.type}/>
                <TodoFT todoList={this.state.todos}
                    changeType={this.changeType.bind(this)}
                    type={this.state.type}/>
            </div>
        )

    }

    updateItem(id, done) {
        this.setState({
            todos: this.state.todos.map(item => item.id === id ? { ...item, done: done } : item)
        });
    }

    deleteItem(id) {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        });
    }

    changeType(type) {
        this.setState({ type });
    }

}

export default Root
