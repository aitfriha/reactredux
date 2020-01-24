import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider,createMuiTheme,withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';

function Sayhello(props) {
    return (
        <h1>je suis {props.name}</h1>
    );
}
//Theme generale du projet
const theme = createMuiTheme({
    // tout ce qui concerne la font
    typography : {
        fontSize:10,
        fontFamily:"Arial",
        textTransform: "none", //note working
        fontWeight: 500,       //note working
        borderRadius: 2        //note working
    },
    palette:{
        primary:blue
    },
//redifinition globale des buttons
    overrides:{
        MuiButton:{
            root:{
                //pourquoi  juste le premier element été coloré
                "&:hover":{backgroundColor:"blue",fontSize:20},
                backgroundColor:"red",
                color:"white",
                textTransform:"none",
                borderRadius: 25
            }
        },
        MuiLink:{
            root:{
                color:"red"
            }
        }
    }
});
function mapStateToProps(state){
    return{x : state.count}

}

function mapDispatchToProps(dispatch){
    return{
        increase : () => dispatch({type:'INCREASE'}),
        decrease : () => dispatch({type:'DECREASE'})
    }
}
Sayhello.propTypes = {
    name: PropTypes.string.isRequired,
};
export default connect(mapStateToProps,mapDispatchToProps)(Sayhello);
