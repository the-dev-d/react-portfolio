import React,{Component} from 'react';
import Card from './cards';
import {web,pr,cur,tech} from './lang';
import './languages.css';
class Languages extends Component {
    render() { 
        return (
            <section id="skills" className="tile grid grid-center">
                <h2 style={{marginBottom:2+'rem'}}>Programming Languages</h2>
                <div className="flex-grid flex-grid-center" style={{height:'auto',width:100+'%',flexWrap:'wrap',justifyContent:'space-around'}}>
                    <Card title="Web Frontend" content={web}> 
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser,
                        While keeping the code simple, secure and efficient.
                        For this i like to use : 
                    </Card>

                    <Card title="Languages" content={pr}>
                        In programming, picking a language really depends on nature of problem,
                        time available for development and usefull features of the language. For this I knowledge in 
                        languages such as
                    </Card>

                    <Card title="Other Tools" content={tech}> Other than development, I'm very comfortable with using
                    supporting Tools such as
                    </Card>

                    <Card title="Learning" content={cur} > 
                        Learning technology never ends and for this reason currently I'm learning 
                    </Card>
                </div>
            </section>
        );
    }
}
 
export default Languages;