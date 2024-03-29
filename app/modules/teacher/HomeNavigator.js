// @flow
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { observer } from 'mobx-react/native';

@observer
export default class HomeTabNavigator extends Component {
    render() {
        const { navigate, state: { index } } = this.props.navigation;
        return (
          <Footer>
            <FooterTab footerTabNavigation>
              <Button active={index === 0} onPress={() => navigate('EventosRouter')}>
                <Icon name="event-note" />
                <Text>Agenda</Text>
              </Button>
              <Button active={index === 1} onPress={() => navigate('AlertScreen')}>
                <Icon name="notifications" />
                <Text>Avisos</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
    }
}
