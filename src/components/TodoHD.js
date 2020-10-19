import React, { Component } from 'react'

class TodoHD extends Component {
    constructor(props) {
        super(props)
    
        this.input = React.createRef()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref="newItem"
                          onKeyDown={ e => {
                              if(e.key === 'Enter') {
                                  this.add(this.refs.newItem.value)
                              }
                          }}/>
                   <button onClick={
                       () => this.add(this.refs.newItem.value)
                   }>add new task</button>
            </div>
        )
    }
    add(item) {
        this.props.addTodo(item);
    }

}

export default TodoHD
