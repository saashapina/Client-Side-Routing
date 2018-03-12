import React, { Component } from 'react'
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import { Route, Link, } from 'react-router-dom';
import { Nav, NavLink } from 'reactstrap';

class App extends Component {
    render () {
        return(
            <div>
                <h1> My Movies </h1>
                <Navigation />
                <Route exact path="/" component={MovieList}/>
                <Route path="/movies/:id" component={Movie}/>
            </div>
            
        )
        
    }
}

const Navigation = () => {
    return (
        <div>
            <Nav className="App">
            <NavLink><Link to = "/"> Movie List </Link></NavLink>
            <NavLink><Link to = "/movies/:id"> Movie: </Link></NavLink>
            </Nav>
        </div>
    )
}


export default App;