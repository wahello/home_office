import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Icon,
  Body,
  Text,
} from 'native-base';

// import { observer } from 'mobx-react/native';
// import store from '../../../store';

import BubbleMenu from '../components/BubbleMenu';

// @observer
export default class AlertScreen extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header appHeader>
          <Left>
            <TouchableWithoutFeedback onPress={() => navigate('DrawerOpen')}>
              <Icon name='menu' />
            </TouchableWithoutFeedback>
          </Left>
          <Body>
            <Title>Notas</Title>
          </Body>
          <Right />
        </Header>
        <Content stickyHeaderIndices={[0]}>
          <BubbleMenu />
          <Text>Notas</Text>
        </Content>
      </Container>
    );
  }
}