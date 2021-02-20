import React, {Component} from "react";
import ResultChange from "./ResultChange";

export default class ListItem extends Component {
      render(){
        const dataList = this.props.dataList;
      
         var listItem = dataList.map((item) => {
            return (<tr key={item.state}>
                    <td>{item.state}</td>
                    <td>{item.total}</td>
                    <td>{item.positive}</td>
                    <td>{item.death}</td>
                    <td>{item.recovered}</td>
                </tr>)
         });
        var newResult =  dataList.sort((a,b) => {
            return b.deathIncrease - a.deathIncrease
         }).slice(0,3);

         return(
            <React.Fragment>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>State code</th>
                                <th>Total cases</th>
                                <th>Positive cases</th>
                                <th>Total Death </th>
                                <th>Total Recovered </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem  }
                        </tbody>
                    </table>            
                </div>
                <ResultChange  results = {newResult}/> 
        </React.Fragment>
        )
    }
}