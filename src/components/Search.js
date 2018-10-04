import  React, { Component } from 'react'
import Modal from 'react-modal';






class Search extends Component {

  getInfo = async (e) =>{
    e.preventDefault();
    const country = e.target.elements.Country.value;
    const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await api_call.json();
    console.log(data);
    

  }

  render() {

    return (
      <div>
        <div>
            <form onSubmit={this.getInfo}>
                <input type= "text" name="Country" placeholder="Enter a Country..."></input>
                <button>Get info</button>
            </form>
        </div>                
      </div>
    );
  }
}


export default Search;