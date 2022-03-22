import React,{Component} from 'react';
import './detailbar.css'
class Detailbar extends Component {
    render() { 
        return (
            <div id="about" className="tile grid grid-center">
                <h2 style={{marginBottom:2+'rem'}}>About Me</h2>
                <div className="flex-grid flex-grid-center" style={{height:80+'%',width:100+'%'}}>
                    <div className="holder flex flex-center">
                        <div className="picanimator"></div>
                    </div>
                    <p style={{textAlign:"center"}}> {this.props.children} </p>
                </div>
            </div>
        );
    }
}
 
export default Detailbar;