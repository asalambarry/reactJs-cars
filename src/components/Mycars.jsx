/* eslint-disable react/prop-types */
import React from "react"
import Cars from "./Cars"
// import MyHeaders from "./MyHeaders"
// import Wrapper from "./Wrapper"
class Mycars extends React.Component {
    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: 2000 },
            { name: 'Ford', color: 'black', year: 2010 },
            { name: 'Ford', color: 'red', year: 2018 }
        ]

    }
    noCopy = () => {
        alert("Merci de ne pas copier le texte")
    }
    addStyle = (e) => {
        // console.log(e.target);
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        } else {
            e.target.classList.add('styled')
        }

    }
    addTeanYear = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10
        })
        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear()
        // eslint-disable-next-line react/prop-types, no-unused-vars
        const { title, color } = this.props
        return (
            <div>
                {/* <Wrapper>
                    <MyHeaders myStyle={this.props.color} onMouseOver={this.addStyle}>
                        {this.props.title}
                    </MyHeaders>
                    <p onCopy={this.noCopy}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat earum modi id fugit voluptates repellendus aliquid, ipsa repudiandae atque iste quaerat! Adipisci corrupti obcaecati debitis fuga pariatur exercitationem perferendis.</p>
                </Wrapper> */}

                <h1 onMouseOver={this.addStyle} style={{ color: this.props.color }}>{title}</h1>
                <button onClick={this.addTeanYear}> + 10 ans</button>
                <p onCopy={this.noCopy}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat earum modi id fugit voluptates repellendus aliquid, ipsa repudiandae atque iste quaerat! Adipisci corrupti obcaecati debitis fuga pariatur exercitationem perferendis.</p>
                {/* <Cars color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans '}>{this.state.voitures[0].name}</Cars>
                <Cars color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans '}>{this.state.voitures[1].name}</Cars>
                <Cars color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans '}>{this.state.voitures[2].name}</Cars> */}
                {
                    this.state.voitures.map((voiture, i) => {
                        return (
                            <div key={i}>
                                <Cars color={voiture.color} year={year - voiture.year + 'ans '}>{voiture.name}</Cars>
                            </div>

                        )
                    })
                }

                {/* {this.state.cars.map((item)=>(
                    <Cars>{this.item}</Cars>
                ))} */}
            </div>
        )
    }
}
export default Mycars