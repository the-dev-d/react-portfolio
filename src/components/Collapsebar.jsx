import React, { Component } from 'react';

class Collapsebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            expand:false
        }
    }
    render() { 
        return (    
            <div className="expandcard card grid transition" style={{width:"100%",height:"fit-content",border: "1px solid var(--border)"}}>
                        <button style={{width:"100%",margin:"0px",height:"fit-content"}} onClick={()=>this.setState((prev)=>{return{expand:!prev.expand}})}>
                        <h3 className="flex" style={{padding:"0.5rem 0rem 0.5rem 0rem",width:"100%",height:"2rem",justifyContent:"space-between",margin:"0px"}}>
                            <div>
                                &nbsp; {this.props.name} &nbsp; <i className={this.props.icon}></i>
                            </div>
                            <i style={{marginRight:"1rem"}} class="fa-solid fa-angle-down"></i> 
                            </h3>
                        </button>
                {this.state.expand&&<div className="transition flex flex-center">
                    <p style={{width:"90%",padding:"1rem"}}>
                        {this.props.children}
                    </p>
                </div>
                }
            </div>
        );
    }
}
 
export default Collapsebar;