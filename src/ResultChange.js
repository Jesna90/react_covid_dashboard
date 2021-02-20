import React, {Component} from "react";

export default class ResultChange extends Component {
  
   

    render(){
        const results = this.props.results;
      
         var resultList = results.map((item) => {
            return (<li key={item.state} style={{padding:"10px"}}>
                    {item.state}(<span style={{color:"red"}}>{item.deathIncrease}</span>)
                </li>)
         });

        return(
        <div className="ResultChange">
            <h2>Largest increase in death rate</h2>
            <ol>
                {resultList}
            </ol>
        </div>
        )
    }
}