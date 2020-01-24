import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testnew from './Testnew';
import { connect } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider,createMuiTheme,withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Sayhello from "./helloFolder/Sayhello";



function App(props) {
  return (
	<MuiThemeProvider theme={theme}>
    <div className="App">
		<Sayhello   name="zaid" />
	 <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route  exact path="/testnew" component={Testnew}/>
      </Switch>
      </BrowserRouter>
      <button onClick={props.increase}>+</button>
      <h1>{props.x}</h1>
      <button onClick={props.decrease}>-</button>
	  <p>**********************</p>
    </div>
	</MuiThemeProvider>
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
//(withStyles(styles)(App))
export default connect(mapStateToProps,mapDispatchToProps)(App);
