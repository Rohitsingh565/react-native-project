import { View, Text } from 'react-native'
import React from 'react'
import styled from "styled-components";


const Container = styled.View`
  background-color: lightgreen;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 30px
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

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 170px;
  margin-top: 20px;
  margin-left: 20px;
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
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 15px;
  font-weight: 500;
  margin-left: -2px;
  width: 280
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
  margin-left: 10px;
`;

const Cards = ({title, description, imageURL} ) => {

  return (
    <View>
      <Container>
    <Cover>
      <Image source={{uri : imageURL}} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Caption>
        {description}
</Caption>
    </Content>
  </Container>
    </View>
  )
}

export default Cards