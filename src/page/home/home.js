import React, { PureComponent } from 'react'

import {
    View,
    Text
} from 'react-native'

import { connect } from 'react-redux'

import globalStyles from '../../styles/globalStyles';
import { DEVICE_WIDTH, getRealDP as dp } from '../../utils/screenUtil';

import Banner from '../../component/Banner'
import CommonFlatList from '../../component/CommonFlatList'
import ArticleItemRow from '../../component/ArticleItemRow'
import ListFooter from '../../component/ListFooter'

import {
    fetchHomeBanner,
    fetchHomeList,
    fetchHomeListMore
} from '../../actions/index'


class HomePage extends PureComponent {

    constructor(props) {

        super(props)

        this.state = {
            isRefreshing: false,
        }
    }


    componentDidMount() {
        this.onFetchData();
    }

    async onFetchData() {
        await Promise.all([fetchHomeBanner(),fetchHomeList()])
    }

    onRefresh = async ()=>{
        this.setState({isRefreshing: true});
        await Promise.all([fetchHomeBanner(),fetchHomeList()])
        this.setState({isRefreshing: false});
    }

    renderHeader = () => {
        const { navigation, homeBanner } = this.props;
        return (
            <View>
                <Banner bannerArr={homeBanner} navigation={navigation} />
                <View style={{ height: dp(20) }} />
            </View>
        );
    }

    renderFooter = () => {
        const { isRenderFooter, isFullData, themeColor } = this.props;
        return (
            <ListFooter
              isRenderFooter = {isRenderFooter}
              isFullData = {isFullData}
              themeColor = {themeColor}
            />
        )
    }

    renderItem = ({ item, index }) => {
        const { navigation } = this.props;
         
        return (
            <View>
                <ArticleItemRow
                    navigation={navigation}
                    item={item}
                />
            </View>
        )
    }

    onEndReached = ()=>{

        const {isFullData,page} = this.props;

        if(isFullData){
          return
        }
        fetchHomeListMore(page);
    }

    render() {

        const { navigation, dataSource,homeList } = this.props;
        return (
            <View style={globalStyles.container}>
                <CommonFlatList
                    data={dataSource}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.onEndReached}
                    isRefreshing={this.state.isRefreshing}
                    toRefresh={this.onRefresh} />

            </View>
        )

    }
}


const mapStateToProps = state => {
    return {
        page: state.home.page,
        dataSource: state.home.dataSource,
        homeBanner: state.home.homeBanner,
        homeList: state.home.homeList,
        isRenderFooter: state.home.isRenderFooter,
        isFullData: state.home.isFullData,
        isLogin: state.user.isLogin,
        themeColor: state.user.themeColor,
        language: state.user.language,
    };
};



export default connect(mapStateToProps)(HomePage);