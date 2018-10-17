import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { Grid } from '@material-ui/core';
import SlideInfos from "./SlideInfos";
import ButtonMore from './ButtonMore';
import ButtonLess from './ButtonLess';




const wrapperStyles = {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
}

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountryName: "",
      showSlide: false,
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

  // Click on country
  handleGeographyClick = (geography) => {
    this.setState({
      selectedCountryName: geography.properties.name,
      showSlide: true,
    })
  }

  // Zoom map
  handleZoomIn() {
    if (this.state.zoom === 3.375) {
      this.setState({
        zoom: this.state.zoom,
      })
    }
    else {
      this.setState({
        zoom: this.state.zoom * 1.5,
      })
    }
  }
  handleZoomOut() {
    if (this.state.zoom === 1) {
      this.setState({
        zoom: this.state.zoom,
      })
    }
    else {
      this.setState({
        zoom: this.state.zoom / 1.5,
      })
    }
  }

  handleToUpdate = () => {
    this.setState({ showSlide: false })
  }

  render() {
    return (
      <div style={wrapperStyles}>
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
          <ZoomableGroup zoom={this.state.zoom}>
            {/* <Geographies geography={process.env.PUBLIC_URL + '/world-50m.json'}> */}
            <Geographies geography={require('../images/world-50m.json')}>

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
                      fill: "#315681",
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
        <SlideInfos
          handleToUpdate={this.handleToUpdate}
          showSlide={this.state.showSlide}
          countryName={this.state.selectedCountryName}
        />
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={16}
          >
          <Grid item onClick={this.handleZoomIn}>
            <ButtonMore />
          </Grid>
          <Grid item onClick={this.handleZoomOut}>
            <ButtonLess />
          </Grid>
        </Grid>
      </div>

    )
  }
}

export default WorldMap;
