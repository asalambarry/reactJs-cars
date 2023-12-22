/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Wrapper from "./Wrapper";

const Cars = ({ color, children, year}) => {
    // console.log(props.children);

    let couleurInfo = ""
    if (color) {
        couleurInfo = color
    } else {
        couleurInfo = "Neant"
    }
    const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p>Couleur : Neant ....!</p>)
    // if (children) {
    //     return (
    //         <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
    //             <p>Marque : {children}</p>
    //             {colorInfo}
    //             {/* <p>Couleur : {color}</p> */}
    //         </div>
    //     )

    // } else {
    //     return (
    //         <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
    //             <p>Pas de data...........</p>
    //         </div>
    //     )
    //     // return <p>Pas de data...........</p>
    // }
    // return(
    //     <div style={{backgroundColor : 'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
    //         <p>Marque : {children}</p>
    //         {colorInfo}
    //         {/* <p>Couleur : {color}</p> */}
    //     </div>
    // )
    // Pour utiliser une condition ternaire
    return children ? (
        <Wrapper>
            <p>Marque : {children}</p>
            <p>Annee : {year}</p>
            {/* {colorInfo} */}
            {/* <p>Couleur : {color}</p> */}
            <p>Couleur : {couleurInfo}</p>
        </Wrapper>
        // <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
           
        // </div>

    ) : <p style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>pas de data.........</p>
    // Pour utiliser un if else
    // if (children) {
    //     return (
    //         <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
    //             <p>Marque : {children}</p>
    //             {/* {colorInfo} */}
    //             {/* <p>Couleur : {color}</p> */}
    //             <p>Couleur : {couleurInfo}</p>
    //         </div>
    //     )
    // } else {
    //     return(
    //          <p style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>pas de data.........</p>
    //     )
       
    // }
}
export default Cars