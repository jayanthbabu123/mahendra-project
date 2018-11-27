import React from 'react';

export const Header = (props)=>{
    return(
        <div>this is header, welcome {props.name}</div>
    )
}

Header.defaultProps ={
    name:100
}
