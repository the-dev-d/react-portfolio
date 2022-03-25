import React, { Component } from 'react';
import Collapsebar from './Collapsebar';
import {oslist} from './oslist';

class Os extends Component {
    render() { 
        return (
           <div className="tile grid grid-center">
              <h2>OS preference</h2>
              <div className="grid grid-center" style={{width:"95%"}} >
                    {oslist.map((value,key)=>{
                        console.log(value.name)
                        return(
                            <Collapsebar name={value.name} icon={value.icon}>
                                {value.desc}
                            </Collapsebar>
                        )
                    })}
               </div>
           </div>
        );
    }
}
 
export default Os;