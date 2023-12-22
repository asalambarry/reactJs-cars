import React from 'react'
import './App.css'
import Mycars from './components/Mycars'

class App extends React.Component {
	
	state = {
		title:'Mon Catalogue de Voiture',
		// color:'green'
	}
	changeTitle = () =>{
        this.setState({
            title:'Mon nouveau titre'
        })
    }
	changeViaParam = (param) => {
		this.setState({
			title:param
		})
	}
	changeViaBind = (bind) => {
		this.setState({
			title:bind
		})
	}
	changeHeader = (e) => {
		this.setState({
			title:e.target.value
		})
		// console.log(e.target.value);
	}
  render() {
    return (
      <div className='App'>
		<Mycars title={this.state.title} color={this.state.color}/>
		<button onClick={this.changeTitle}>Changer le nom en dur</button>
		<button onClick={() => this.changeViaParam('Changement via Param')}>Via param</button>
		<button onClick={this.changeViaBind.bind(this, 'Via un bind')}>Via bind</button>
		<input type="text" onChange={this.changeHeader} value={this.state.title}/>
      </div>
    )
  }

}

export default App
