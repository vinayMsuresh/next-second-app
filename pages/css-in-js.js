import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
font-size: 50px;
color: ${({theme}) => theme.colors.primary};`

export default function CSSJS() {
  return (
    <div>
        <Title>Hello CSS and JS</Title>
    </div>
  )
}
