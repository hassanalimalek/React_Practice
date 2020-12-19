import React from 'react';
import unSplash from './Api/unsplash.js'
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar.js'
import ImageList from './components/ImageList.js'
class App extends React.Component{
    
    
    state = {images:[]}

    onSearchSubmit = async term => {
        const response = await unSplash.get(
            '/search/photos',
            {
                params:{query:term}
            }
        )
        this.setState({images:response.data.results})
    }
    
    render(){
        return(
            <div>
                  <SearchBar onSubmit={this.onSearchSubmit} />
                  <ImageList images={this.state.images}/>
            </div>
      
        );
    }
  
}


ReactDom.render(<App/>,
                document.getElementById("root"))