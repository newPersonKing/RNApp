import Color from '../utils/Color';

const initialStore = {
    isLogin: false, // 是否已登录
    userInfo: {
        admin: false,
        chapterTops: [],
        collectIds: [],
        email: '',
        icon: '',
        id: '',
        nickname: '',
        password: '',
        publicName: '',
        token: '',
        type: '',
        username: '',
    }, // 用户信息
    themeColor: Color.ICON_GRAY, // 用户设置APP主题色
    language: 'zhHans', // APP默认语言
};

const user = (state = initialStore,action)=>{

    return {...state}
};

export default user;