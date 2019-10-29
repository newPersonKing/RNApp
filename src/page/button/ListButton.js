import React, { PureComponent } from 'react'

import { Container, Header, Content, Button, Text, Left, Body, Title } from 'native-base'
import { StyleSheet } from 'react-native'
import color from '../../utils/Color'

import SyanImagePicker from 'react-native-syan-image-picker'

const options = {
    imageCount: 3,
}

class ButtonList extends PureComponent {

    selectPic = () => {
        SyanImagePicker.showImagePicker(options, (err, selectedPhotos) => {
            if (err) {
                // 取消选择
                return;
            }
        })
    }

    render() {
        const {navigation} = this.props;

        return (
            <Container>

                <Header>
                    <Left />
                    <Body>
                        <Title>
                            button的各种样式
                             </Title>
                    </Body>
                </Header>

                <Content>

                    <Button full light onPress={this.selectPic}>
                        <Text>图片选择</Text>
                    </Button>

                    <Button block danger onPress={()=>{navigation.navigate("ListIcon")}}>
                        <Text>LIST ICON</Text>
                    </Button>

                    <Button block danger onPress={()=>{navigation.navigate("ListIcon")}}>
                        <Text>LIST Divider</Text>
                    </Button>

                </Content>


            </Container>
        )

    }

}

const styles = StyleSheet.create({

    rowStyle: {
        alignItems: "center",
        justifyContent: "space-between",
    }

})


export default ButtonList;