import React, { Component } from 'react'

class TodoFT extends Component {
    constructor() {
        super();
    }

    render() {
        const list = this.props.todoList;
        return (
            <div>
                <button onClick={() => { this.props.changeType(1)}}
                    className={this.props.type === 1 ? 'active' : null}>
                    show all ({list.length}) </button>

                <button onClick={() => { this.props.changeType(2) }}
                    className={this.props.type === 2 ? 'active' : null}>
                    show done ({list.filter(item => item.done).length})
                </button>

                <button onClick={() => { this.props.changeType(3) }}
                    className={this.props.type === 3 ? 'active' : null}>
                    show not done ({list.filter(item => !item.done).length})
                </button>
            </div>
        )
    }

}

export default TodoFT
