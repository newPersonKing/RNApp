import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { DEVICE_WIDTH, getRealDP as dp } from '../utils/screenUtil';
import Color from '../utils/Color';

const propTypes = {
    isRenderFooter: PropTypes.bool.isRequired,
    isFullData: PropTypes.bool.isRequired,
    indicatorColor: PropTypes.string,
};

const defaultProps = {
    isRenderFooter: false,
    isFullData: false,
    indicatorColor: Color.THEME,
};

class ListFooter extends PureComponent {
    render() {
        console.log("===="+this.props.isRenderFooter)
        if (!this.props.isRenderFooter) {
            return null;
        }
        if (this.props.isFullData) {
            return (
                <View style={styles.footer}>
                    <Text style={{ color: Color.TEXT_LIGHT }}>{'all-loaded'}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator color={this.props.indicatorColor} />
                    <Text style={{ marginLeft: dp(20), color: Color.TEXT_LIGHT }}>
                        {'Playing with life loading'}
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        width: DEVICE_WIDTH,
        height: dp(80),
        alignItems: 'center',
        justifyContent: 'center',
    },
});

ListFooter.propTypes = propTypes;
ListFooter.defaultProps = defaultProps;

export default ListFooter;