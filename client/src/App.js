import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: null
    }
  }
  

  componentDidMount() {
    axiosInstance.get('/posts')
    .then(res => {
      this.setState({hello: res.data})
      console.log(res.data)})
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.hello
          ? <div> {this.state.hello} </div>
          : null}
      </div>
    )
  }
}


export default App;
