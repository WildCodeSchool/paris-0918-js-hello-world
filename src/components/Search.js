import  React, { Component } from 'react'
import Modal from 'react-modal';
import Country from './Country'
import Photos from './Photo'
import Video from './Youtube'






class Search extends Component {

  state = {
    Country: undefined,
    Region:undefined,
    Flag: undefined,
    Capital:undefined,
    Currencie:undefined,
    Population:undefined,
    Area:undefined,
    showModal : false 
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }


  getInfo = async (e) =>{
    e.preventDefault();
    const country = e.target.elements.Country.value;
    const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      Country:data[0].name,
      Region:data[0].region,
      Flag:data[0].flag,
      Capital:data[0].capital,
      Currencie:data[0].currencies[0].name,
      Population:data[0].population,
      Area:data[0].area,

    })
    
  }

  render() {

    return (
      <div>
        <div>
            <form onSubmit={this.getInfo}>
                <input type= "text" name="Country" placeholder="Enter a Country..."></input>
                <button onClick= {this.openModal}>Get info</button>
            </form>
        </div> 

        <Modal isOpen={this.state.showModal}>  
            <div onClick={this.closeModal} >
              <p>Country : {this.state.Country}</p>
              <p>Region : {this.state.Region}</p>
              <p>Flag : <img src={this.state.Flag}  width="200px" alt="Flag"></img></p>
              <p>Capital : {this.state.Capital}</p>
              <p>Currencie : {this.state.Currencie}</p>
              <p>Population : {this.state.Population} Inhabitants</p>
              <p>Area : {this.state.Area} Km²</p>
            
            </div>
        </Modal>             
      </div>
    );
  }
}


export default Search;