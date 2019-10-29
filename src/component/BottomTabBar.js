import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEVICE_WIDTH, getRealDP as dp, isAndroid } from '../utils/screenUtil';
import Color from '../utils/Color';

class BottomTabBar extends PureComponent {

    render() {

        const { route, focused, themeColor } = this.props;

        const { routeName } = route;

        let tabBarLabel, tabBarIconName, tabBarIconSize;

        switch (routeName) {
            case 'Home':
                tabBarLabel = 'home';
                tabBarIconName = 'ios-home'
                tabBarIconSize = dp(50)
                break;
            case 'Shop':
                tabBarLabel = 'Shop';
                tabBarIconName = 'ios-school'
                tabBarIconSize = dp(50);
                break
            case 'My':
                tabBarLabel = 'My';
                tabBarIconName = 'ios-people'
                tabBarIconSize = dp(50);
                break;
        }

        const tabBarColor = focused ? themeColor : Color.TEXT_LIGHT

        const content = (
            <View style={styles.tabBarWrapper}>
                <View style={styles.iconWrapper}>
                    <Icon
                        name={tabBarIconName}
                        size={tabBarIconSize}
                        color={tabBarColor}
                    />
                </View>

                <Text style={[styles.tabBarLabel, { color: tabBarColor }]}>
                    {tabBarLabel}
                </Text>
            </View>
        )

        if (isAndroid) {
            /* TouchableNativeFeedback 仅限制于android  Ripple当按钮被按下时产生一个涟漪状的背景*/
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                    'rgba(50,50,50,0.1)',
                    true,
                )}

                {...this.props}>

                {content}

            </TouchableNativeFeedback>
        }

        return (
            <TouchableOpacity activeOpacity={0.8} {...this.props}>
                {content}
            </TouchableOpacity>
        )
    }


}


const styles = StyleSheet.create({
    tabBarWrapper: {
        width: DEVICE_WIDTH / 3,
        height: dp(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarLabel: {
        fontSize: dp(20),
    },
    iconWrapper: {
        width: dp(65),
        height: dp(65),
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// const mapStateToProps = state => {
//     return {
//         themeColor: state.user.themeColor,
//         language: state.user.language,
//     };
// };

// export default connect(mapStateToProps)(BottomTabBar);
export default BottomTabBar;