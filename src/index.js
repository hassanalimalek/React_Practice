import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar.js'
class App extends React.Component{
    
    onSearchSubmit(term){
        console.log(term)
    }
    
    render(){
        return(
            <div>
                  <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
      
        );
    }
  
}


ReactDom.render(<App/>,
                document.getElementById("root"))