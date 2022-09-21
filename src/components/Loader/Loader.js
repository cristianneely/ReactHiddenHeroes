import React from 'react'

export const Loader = ({loading}) => {
  
    if(loading){
    return (
    <>
     <h5> Cargando...</h5>
    </>)}
    else return (<></>);

}
