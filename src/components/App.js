import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from 'react-search'


const items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
    { id: 3, value: 'go' },
    { id: 4, value: 'julia' }
  ]

class App extends PureComponent{
    state = {
        reverted: false
    }


    render() {
        return (
            <div className="container">
            <div className="jumbotron">
            <div>
                  <Search items={items} className="card-text"/>
                  <Search items={items}
                          placeholder='Pick your language'
                          maxSelected={0}
                          multiple={true}/>
            </div>
            <h2 className="display-3">App name
            <button className="btn btn-primary btn-lg float-right" onClick = {this.revert}>Revert</button>
            </h2>
            </div>
            <div>
                <input className= "btn btn-primary btn-lg" ></input>
            </div>
            <div>
                <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
            <div>
                <Map google={this.props.google} zoom={5}>
                  <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
                  <InfoWindow onClose={this.onInfoWindowClose}>
                  </InfoWindow>
                </Map>
            </div>
            </div>
        )
    }
    revert = () => {
        this.setState({
        reverted: !this.state.reverted
    })
}
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAwMFexmWhgBytFdWIrX8g1rhMcvcPuUjI")
  })(App)