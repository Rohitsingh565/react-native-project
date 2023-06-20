import { View, Text } from 'react-native'
import React from 'react'
import styled from "styled-components";



const Container = styled.View`
  background-color: lightgrey;
  width: 315px;
  height: 80px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 0px;
  margin-top: 0px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 5px;

`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
`;


const UserCard = ({name , url}) => {
    return (

<Container>
<Content>
  <Logo source={{uri : url}} />
  <Caption>{name}</Caption>
</Content>
</Container>
      )
}

export default UserCard