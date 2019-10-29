import React, { Component } from 'react';

import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View, Title } from 'native-base';

import { DEVICE_WIDTH, getRealDP as dp, isAndroid } from '../../utils/screenUtil';

class ListIconPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchState : false
        }
    }

    render() {

        return (
            <Container>
                <Header >

                    <Left >
                        <Icon name='arrow-back' />
                    </Left>

                    <Body>
                        <Title>
                            LIST ICONS
                    </Title>
                    </Body>
                </Header>
                <Content>
                    <View style={{ marginTop: dp(20) }}>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.switchState} onValueChange={(value)=>{
                                    console.log("value=="+value)
                                    this.state.switchState = value;
                                    this.setState({})
                                }}/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.switchState} onValueChange={(value)=>{
                                    console.log("value=="+value)
                                    this.state.switchState = value;
                                    this.setState({})
                                }}/>
                            </Right>
                        </ListItem>
                    </View>

                    <View style={{ marginTop: dp(100) }}>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.switchState} onValueChange={(value)=>{
                                    console.log("value=="+value)
                                    this.state.switchState = value;
                                    this.setState({})
                                }}/>
                            </Right>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={this.state.switchState} onValueChange={(value)=>{
                                    console.log("value=="+value)
                                    this.state.switchState = value;
                                    this.setState({})
                                }}/>
                            </Right>
                        </ListItem>
                    </View>
                </Content>

            </Container>
        )
    }
}


export default ListIconPage;

