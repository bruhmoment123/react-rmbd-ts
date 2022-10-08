import React from 'react';


import {Wrapper,Content} from './Grid.styles';

//Types
type Props ={
    header:string;
    children:React.ReactNode;
}


//children is a default prop
//things nested in a component can be accessed through children
const Grid:React.FC<Props> = ({header,children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)


export default Grid;