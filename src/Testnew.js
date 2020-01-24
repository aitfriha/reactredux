import React, { Component } from 'react'
import { connect } from 'react-redux';
import {INCREASE} from './actionsReducer/actionName';
import {DECREASE} from './actionsReducer/actionName';
import Button from '@material-ui/core/Button';
import { fade, makeStyles,withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
/*******************************************************************************/
const useStyles = theme => ({
 //redifinition globale des buttons
	 fatima: {
            fontSize: "1rem",
            fontWeight: theme.typography.fontWeightRegular,
			backgroundColor:"green",
			"&:hover":{backgroundColor:"yellow",fontSize:20},
        }
});

/*******************************************************************************/
export class Testnew extends Component {
    state={
        ma:1,
        mb:1
    }
    componentDidMount() {
        console.log("componentDidMount");
       // document.title = `vous avez${this.state.ma}`;
    }
    componentDidUpdate() {
        document.title = `vous avez clicker ${this.state.ma} fois`;
    }
    handleclick = () =>{
        this.setState({ma:this.state.ma+1})
        this.setState({mb:this.state.ma+1})
     }
    render() {
        console.log("render");
		const { classes } = this.props;
        return (
            <div>
               <Button className={classes.fatima} onClick={this.handleclick}>handleclick</Button>
                <h1>{this.state.ma}</h1>
                <h1>{this.state.mb}</h1>
              <Button className={classes.fatima} onClick={this.props.increase}>Incrementer</Button>
                <h1>{this.props.x}</h1>
					{/*color="primary"*/}
              <Button  onClick={this.props.decrease}>Decrementer</Button>  
            </div>
        )
    }
}
function mapStateToProps(state)
{
  return{x : state.count}
}
//un object action1
const action1 = {type:'INCREASE'};
//un object action2
const action2 = {type:'DECREASE'};

function mapDispatchToProps(dispatch)
{
  return{
  increase : () => dispatch(action1),
  decrease : () => dispatch(action2)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)((withStyles(useStyles, { withTheme: true })(Testnew)));
