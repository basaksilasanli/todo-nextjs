import React, {Component} from 'react';

import axios from 'axios'
import "../styles/base.scss"
import { api } from '../static/config-variable'

import Todo from "../components/Todo";
import Header from "../components/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      todos: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const res = await axios.get(api);
    const todos = await res.data;
    this.setState({todos})
  };

  handleChange = (event) => {
    this.setState({note: event.target.value});
  };

  addTodo = () => {
    if (this.state.note === '') {
      return
    }
    let self = this;
    axios.post(api, {note: this.state.note, completed: false})
      .then(function (res) {
        self.setState(prevState => ({
          todos: [...prevState.todos, {note: res.data.note, completed: res.data.completed, id: res.data.id}],
          note: ''
        }))
      }).catch(function (error) {
        console.log(error);
      });

  };

  handleKeyPress = (event) => {
    const ENTER = 13;
    if (event.which === ENTER && this.state.note) {
      this.addTodo()
    }
  };

  updateStatus(id) {
    let self = this;
    let data = this.state.todos.find(item => item.id === id);
    data.completed = !data.completed;
    axios.put(api + `/${id}`, data)
      .then(function (res) {
        self.setState({
          todos: self.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = res.data.completed;
              return todo
            }
            return todo
          })
        })
      });
  }

  deleteTodo = (id) => {
    let self = this;
    axios.delete(api + `/${id}`)
      .then(function (res) {
        self.setState({
          todos: self.state.todos.filter(function (todo) {
            return todo.id !== id
          })
        });
      })
  }

  render() {
    let todos = this.state.todos.map((val) => {
      return <Todo key={val.id} note={val.note} completed={val.completed}
        updateStatus={() => this.updateStatus((val.id))}
        deleteTodo={() => this.deleteTodo((val.id))}
      />
    });

    return (
      <div className={"container"}>
        <Header/>
        {todos}
        <div className={"box"}>
          <input placeholder="Enter Notes" type="text" className="input"
            value={this.state.note}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button className="button" onClick={this.addTodo}>add!</button>
        </div>
        <footer className="footer"/>
      </div>
    );
  }
}

export default Home;
