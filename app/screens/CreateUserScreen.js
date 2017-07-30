// @flow
import React, { Component } from 'react';
import { View, Image, Keyboard, Alert } from 'react-native';
import { Form, Item, Input, Button, Text, Icon } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';

import { observable } from 'mobx';
import { observer } from 'mobx-react/native';

@observer
export default class LoginScreen extends Component {
    actionSheet: any;

    @observable
    store = {
        telefone: '',
        email: '',
        senha: '',
        confirmaSenha: '',
    };

    /**
     * Handle the button click
     */
    async login() {
        Keyboard.dismiss(); // hide the keyboard
        const { telefone, email, senha, confirmaSenha } = this.store;
        const { params } = this.props.navigation.state;
        if (params && params.token) {
            if (!telefone) {
                Alert.alert('Erro', 'Informe o telefone cadastrado na escola');
            }
        } else if (!telefone) {
            Alert.alert('Erro', 'Informe o telefone cadastrado na escola');
        } else if (!email) {
            Alert.alert('Erro', 'Informe um email válido');
        } else if (!senha) {
            Alert.alert('Erro', 'Informe uma senha');
        } else if (senha !== confirmaSenha) {
            Alert.alert('Erro', 'A senha é diferente da confirmação de senha');
        } else {
            // TODO: Cadastrar usuário;
        }
    }

    renderTelefone() {
        const onChange = (val) => {
            this.store.telefone = val;
        };

        return (
          <Item style={styles.loginInput}>
            <Icon active name="phone" />
            <TextInputMask
              type="cel-phone"
              placeholder="Telefone cadastrado na escola"
              value={this.store.telefone}
              onChangeText={onChange}
              underlineColorAndroid="transparent"
              placeholderTextColor="#575757"
              style={{ flex: 1, fontSize: 17 }}
            />
          </Item>
        );
    }

    renderEmail() {
        const { params } = this.props.navigation.state;
        if (params && params.token) return null;

        const onChange = (val) => {
            this.store.email = val;
        };

        return (
          <Item style={styles.loginInput}>
            <Icon active name="mail-outline" />
            <Input placeholder="Email" value={this.store.email} onChangeText={onChange} />
          </Item>
        );
    }

    renderSenha() {
        const { params } = this.props.navigation.state;
        if (params && params.token) return null;

        const onChange = (val) => {
            this.store.senha = val;
        };
        return (
          <Item style={styles.loginInput}>
            <Icon active name="lock-outline" />
            <Input
              placeholder="Senha"
              secureTextEntry
              value={this.store.senha}
              onChangeText={onChange}
            />
          </Item>
        );
    }

    renderConfirmaSenha() {
        const { params } = this.props.navigation.state;
        if (params && params.token) return null;

        const onChange = (val) => {
            this.store.confirmaSenha = val;
        };
        return (
          <Item style={styles.loginInput}>
            <Icon active name="lock-outline" />
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              value={this.store.confirmaSenha}
              onChangeText={onChange}
            />
          </Item>
        );
    }

    renderButton() {
        const onPress = () => this.login();
        return (
          <Button block onPress={onPress}>
            <Text>Criar Usuário</Text>
          </Button>
        );
    }

    render() {
        return (
          <Image source={BG_IMG} style={styles.loginBackgroundImage}>
            <View style={styles.loginView}>
              <View style={{ flex: 1 }} />
              <Form style={styles.loginForm}>
                {this.renderTelefone()}
                {this.renderEmail()}
                {this.renderSenha()}
                {this.renderConfirmaSenha()}
              </Form>
              {this.renderButton()}
              <View style={{ flex: 1 }} />
            </View>
          </Image>
        );
    }
}

const styles = {
    loginBackgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        width: null,
        height: null,
    },
    loginView: {
        flex: 1,
        padding: 20,
    },
    loginForm: {
        marginTop: 20,
        marginBottom: 20,
    },
    loginInput: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        marginLeft: 0,
    },
    loginImage: {
        width: 240,
        height: 195,
        alignSelf: 'center',
        marginBottom: 30,
    },
    facebook: {
        marginBottom: 15,
        backgroundColor: '#3b5998',
    },
    forgotPassword: {
        color: '#fff',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
};

const BG_IMG = require('../img/bg.jpg');