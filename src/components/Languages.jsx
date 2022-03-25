import React,{Component} from 'react';
import Card from './cards';
import {skills} from './lang';
import './languages.css';
class Languages extends Component {
    render() { 
        return (
            <section id="skills" className="tile grid grid-center">
                <h2 style={{marginBottom:2+'rem'}}>Programming Languages</h2>
                <div className="flex-grid flex-grid-center" style={{height:'auto',width:100+'%',flexWrap:'wrap',justifyContent:'space-around'}}>
                    
                    {skills.map((value,key)=>{
                        return (
                            <Card key={key} title={value.title} content={value.langs}> 
                                {value.desc}
                            </Card>
                    )
                    })}
                </div>
            </section>
        );
    }
}
 
export default Languages;