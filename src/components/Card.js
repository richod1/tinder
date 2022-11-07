import React, { useState } from 'react'
import styled from "styled-components"
import TinderCard from 'react-tinder-card';

function Card() {
    const [people, setPeople]=useState([
        {
            name: "Elon Musk",
        url:
        ""
        },
        {
            name: "Degraft Frimpong",
        url:
        ""
        },
        {
            name: "Silver Dollor",
        url:
        ""
        },
    ])
  return (
    <Container>
        <Content>
        {people.map((person)=>(
            <TinderCard>

            </TinderCard>
        ))}
        </Content>
    </Container>
  );
}

export default Card
const Container=styled.div`

`

const Content=styled.div`

`