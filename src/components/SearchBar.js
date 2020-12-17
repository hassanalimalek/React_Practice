import React from 'react';



class SearchBar extends  React.Component{
    state = {term : ''}
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
      
    render(){
        return(
           <div className="ui inverted segment">
               <form className="ui inverted form"
               onSubmit={this.onFormSubmit}>
                <div className="fieled">
                    <label ><h3>Image Search</h3></label>
                    <input
                    value={this.state.term}
                    onChange={e=>this.setState({term:e.target.value})}
                    style={{margin:"20px 0px",width:"20%"}} type="text" name="first-name" placeholder="What do you want to see"></input>
                </div>
                </form>

           </div>
        )
       
    
    }
}
export default (SearchBar)
