
import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import ReactTooltip from "react-tooltip"

import Country from './Country' // componant prive
import Photos from './Photo'
import Modal from 'react-modal';
import Video from './Youtube'

const wrapperStyles = {
  width: "100%",
  maxWidth:"100%",
  margin: "0 auto",
}

class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountryName: "",
      showModal: false,
      zoom: 1
    };
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 100)

  }

  // handler the click event of the map
  handleGeographyClick = (geography) => {
    this.setState({
      selectedCountryName: geography.properties.name,
      showModal: true
    })
  }

  // handler the click event on modal to close modal
  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  handleZoomIn() {
    if (this.state.zoom===3.375) {
      this.setState({
        zoom: this.state.zoom,
      })
    }
    else{
      this.setState({
        zoom: this.state.zoom * 1.5,
      })
    }
  }
  handleZoomOut() {
    if (this.state.zoom===1) {
      this.setState({
        zoom: this.state.zoom,
      })
    }
    else{
      this.setState({
        zoom: this.state.zoom / 1.5,
      })
    }
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <button onClick={this.handleZoomIn}>{"Zoom in"}</button>
        <button onClick={this.handleZoomOut}>{"Zoom out"}</button>
        <ComposableMap
          projectionConfig={{
            scale: 205,
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup zoom={ this.state.zoom }>
            <Geographies geography={process.env.PUBLIC_URL + '/world-50m.json'}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  data-tip={geography.properties.name}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#F3F8FF",
                      stroke: "#7FBAFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#7FBAFF",
                      stroke: "#7FBAFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "##7FBAFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                  onClick={this.handleGeographyClick} // call handleGeographyClick when the map is clicked
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip />

        {/* Modal to display country */}
        <Modal isOpen={this.state.showModal}  >
          <div onClick={this.closeModal} >
            <Country countryName={this.state.selectedCountryName} />
          </div>
          <div>
            <Photos countryName={this.state.selectedCountryName} />
          </div>
          <div>
            <Video />
          </div>
        </Modal>


      </div>

    )
  }
}

export default BasicMap
