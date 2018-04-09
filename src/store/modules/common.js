import { setStore, getStore, removeStore } from '../../utils/mUtils'

const windowTypes = [
  'mobile_s',
  'mobile_m',
  'mobile_l',
  'tablet',
  'laptop',
  'laptop_l'
]
const getTypeByWidth = function(width) {
  if (width >= 950) {
    return 'laptop'
  } else if (width >= 750) {
    return 'tablet'
  } else if (width >= 480) {
    return 'mobile_l'
  } else if (width >= 300) {
    return 'mobile_m'
  }
}

const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  CHANGE_ASIDE_NAV_SELECTED: 'CHANGE_ASIDE_NAV_SELECTED',
  CHANGE_ASIDE_NAV_SHOW: 'CHANGE_ASIDE_NAV_SHOW',
  CHANGE_NAV_SELECTED_COMPNAME: 'CHANGE_NAV_SELECTED_COMPNAME',
  SET_LOGIN_USER: 'SET_LOGIN_USER',
  SET_CLIENT_WINDOW_WIDTH: 'SET_CLIENT_WINDOW_WIDTH',
  SET_CLIENT_WINDOW_TYPE: 'SET_CLIENT_WINDOW_TYPE'
}

const state = {
  windowWidth: 0, // 屏幕宽度
  windowType: '', // 屏幕宽度类型，mobile_s、mobile_m、mobile_l、tablet、laptop、laptop_l
  navSelected: 0, // 用数组表示所选的层级序号
  navShow: true, //
  sidebar: {
    opened: !+getStore('sidebarStatus')
  },
  loginUser: {
    defalutPassword: false,
    password: '',
    avatar: '',
    role: 0,
    senior: 0,
    token: '',
    id: '',
    userName: ''
  } // 登陆者信息
}

const getters = {
  sidebar: state => state.sidebar,
  windowWidth: state => state.windowWidth,
  windowType: state => state.windowType,
  navSelected: state => state.navSelected,
  navShow: state => state.navShow,
  loginUser: state => state.loginUser
}

const actions = {
  changeNavShow({ commit }, bool) {
    if (bool === true || bool === false) { // TODO
      commit(types.CHANGE_ASIDE_NAV_SHOW, bool)
    }
  },
  changeNavSelected({ commit }, index) {
    if (index !== undefined) { // TODO
      commit(types.CHANGE_ASIDE_NAV_SELECTED, index)
    }
  },
  ToggleSideBar({ commit }, index) {
    commit(types.TOGGLE_SIDEBAR)
  },
  setWindowWidth({ dispatch, commit }, width) {
    if (!isNaN(width)) { // TODO
      commit(types.SET_CLIENT_WINDOW_WIDTH, width)
      dispatch('setWindowType', getTypeByWidth(width))
    }
  },
  setWindowType({ commit }, type) {
    if (windowTypes.indexOf(type) !== -1) { // TODO
      commit(types.SET_CLIENT_WINDOW_TYPE, type)
    }
  },
  setLoginUser({ commit }, info) {
    if (info) {
      commit(types.SET_LOGIN_USER, info)
      setStore('login_info', info)
      if (info.token) {
        setStore('token', info.token)
      }
    }
  },
  loginOut({ dispatch, commit }) {
    commit(types.SET_LOGIN_USER, '')
    removeStore('token')
    removeStore('login_info')
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR](state) {
    if (state.sidebar.opened) {
      setStore('sidebarStatus', 1)
    } else {
      setStore('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
  },
  [types.CHANGE_ASIDE_NAV_SHOW](state, arg) {
    state.navShow = arg
  },
  [types.CHANGE_ASIDE_NAV_SELECTED](state, arg) {
    state.navSelected = arg
  },
  [types.SET_CLIENT_WINDOW_WIDTH](state, arg) {
    state.windowWidth = arg
  },
  [types.SET_CLIENT_WINDOW_TYPE](state, arg) {
    state.windowType = arg
  },
  [types.SET_LOGIN_USER](state, arg) {
    if (arg) {
      state.loginUser = arg
    } else {
      state.loginUser = {}
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
