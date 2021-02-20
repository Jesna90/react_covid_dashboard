import React, { Component } from 'react';
import ListItem from './ListItem';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {item:[],errorMessage:""}
    }
    componentDidMount(){
        fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(res => res.json())
        .then((result) => {
            this.setState({item: result});
        },
        (error) => {
          this.setState({errorMessage:error})
        });      
    }
  render() {
    return(
      <div className='container'>
          <h1>US COVID Updates</h1>
           <ListItem  dataList={this.state.item} />
      </div>
    )
  }
}

export default App;
