import React, { Component } from 'react';
import Header from './header/index';
import Content from './content';
import Question from './content/question'
import My from './content/my';
import Detail from './content/detail';
import { Layout} from 'antd';
import Footer from './footer';
import { Route,Switch} from 'react-router-dom';

export default class App extends Component{
    constructor(){
        super();
        localStorage.setItem('islogin',false);
        this.state = {
            islogin: localStorage.getItem('islogin')
        }
    }

    callback = (islogin) => {
        console.log(islogin);
        localStorage.setItem('islogin',islogin);
        this.setState({
            islogin: islogin
        })
    }

    render(){
        return (
            <Layout>
                <Header callback={this.callback}/>
                <Switch>
                    <Route exact path="/" component={Content}/>
                    <Route exact path="/question" component={Question}/>
                    <Route exact path="/my" component={My}/>
                    <Route exact path="/detail" component={Detail}/>                    
                </Switch>
                <Footer/>
            </Layout>
        )
    }
}
