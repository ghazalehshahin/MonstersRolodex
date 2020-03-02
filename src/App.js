import React from 'react';
import './App.css';
import {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();
    this.state={
      monsters:[],
      searchfeild:''
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(x=>this.setState({monsters:x}))
}
handlechange=e=>{
  this.setState({searchfeild:e.target.value})
};
render(){
  const{monsters,searchfeild}=this.state;
  const filteredmonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchfeild.toLowerCase()));
  return(
    <div className='App'>
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox placeholder='search monster'
      handlechange={this.handlechange}
      />
    <CardList monsters={filteredmonsters}/>
    </div>
  );
}
}

export default App;
