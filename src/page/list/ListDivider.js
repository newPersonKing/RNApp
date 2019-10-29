import React, { Component } from 'react';
import { Drawer,Text } from 'native-base';
import { DEVICE_WIDTH } from '../../utils/screenUtil';
class ListDivider extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.drawer._root.open()
    }

    render() {
        return (<Drawer ref={(ref) => { this.drawer = ref; }}
            content={<Text>21323</Text>}
            width={1}>
            <Text>Main</Text>
        </Drawer>)
    }
}


export default ListDivider;