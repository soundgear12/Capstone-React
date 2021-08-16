import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomePageComponent';
import AccountDetails from './AccountDetailsComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';





class Main extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const AccountPage = () => {
            return(
                <AccountDetails />
            );
        }

        return (

            <div>    
                <Header/>    
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/accounts" component={AccountPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;