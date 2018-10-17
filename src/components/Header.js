import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../css/Header.css';
import { Drawer, Grid } from '@material-ui/core';
import Form from './Form';
import ButtonClose from './ButtonClose';
import ButtonContact from './ButtonContact';

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: '#F3F8FF',
        [theme.breakpoints.up('xs')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('sm')]: {
            width: '50vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '40vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw'
        },
    },
    titleContact: {
        color: '#5883b5'
    }

});

class Header extends Component {
    state = {
        open: false,
    };

    handleToggle = () => this.setState({ open: !this.state.open })
    handleClose = () => this.setState({ open: false });

    render() {
        const { classes } = this.props;
        return (
            <div className="header">
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={4} md={5}/>
                    <Grid item xs={4} md={2}>
                        <img className="logo" src={require('../images/Logo.svg')} alt="Logo" />
                    </Grid>
                    <Grid item xs={2} md={4}/>
                    <Grid item xs={2} md={1}
                    onClick={this.handleToggle}>
                        <ButtonContact />
                    </Grid>
                </Grid>

                <Drawer
                    docked="false"
                    anchor="right"
                    open={this.state.open}
                //onClick={this.handleClose}
                //onKeyDown={this.handleClose}
                >
                    <div className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >
                            <Grid>
                                {<h1 className={classes.titleContact}>Contact US</h1>}
                            </Grid>
                            <Grid item className={classes.button} onClick={this.handleClose}>
                                <ButtonClose
                                    open={this.state.open}
                                />
                            </Grid>
                            <Grid item>
                                <Form />
                            </Grid>
                        </Grid>
                    </div>
                </Drawer>
            </div >
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);





// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> HELLO WORLD</h1>
//             </div>
//         );
//     }
// }