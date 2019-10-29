import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Body, Button, Content, Form, Item, Label, Input } from 'native-base'
import { View, StyleSheet, Text } from 'react-native'

import { DEVICE_WIDTH, getRealDP as dp, isAndroid, DEVICE_HEIGHT } from '../../utils/screenUtil';
import Color from '../../utils/Color'

import {
    saveLoginMessage
} from '../../actions/index'

class LoginPage extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                userName: "",
                passWord: ""
            }
        }
    }

    saveLoginMessage = () => {
        const { navigation } = this.props;
        saveLoginMessage({
            userName: this.state.user.userName,
            passWord: this.state.user.passWord
        })

        navigation.navigate("Main")
    }

    onUserNameChage = (userName) => {
        this.state.user.userName = userName;
    }

    onPassWordChange = (passWord) => {
        this.state.user.passWord = passWord
    }

    render() {
        const { navigation, userName, passWord } = this.props;
        return (
            <View style={styles.body}>
                <Form style={{ margin: dp(30) }}>
                    <Item inlineLabel>
                        <Label>Username</Label>
                        <Input onChangeText={this.onUserNameChage} />
                    </Item>
                    <Item inlineLabel last>
                        <Label>Password</Label>
                        <Input onChangeText={this.onPassWordChange} />
                    </Item>
                </Form>
                <Button full style={{ margin: dp(30) }} onPress={this.saveLoginMessage}>
                    <Text>登录</Text>
                </Button>
                <Text>{userName + passWord}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
    }
})

const mapStateToProps = (state) => {
    return {
        userName: state.login.userName,
        passWord: state.login.passWord
    }
}



export default connect(mapStateToProps)(LoginPage);