import config from '../config';
const Bmob = require('../utils/Bmob-1.6.1.min.js');
const wilddog = require('wilddog');

// 初始化 bmob sdk
Bmob.initialize(config.bmob.appid, config.bmob.apikey)

// 初始化野狗sdk
const wilddogConfig = {
  syncURL: config.wilddog.syncURL
}
wilddog.initializeApp(wilddogConfig)

/**
 * 野狗实时数据写入节点
 */
const actionRef = wilddog.sync().ref('/bmob/actions/')

/**
 * 使用 bmob api 获取云端数据
 * https://bmob.github.io/hydrogen-js-sdk/#/?id=%e6%9f%a5%e8%af%a2%e6%89%80%e6%9c%89%e6%95%b0%e6%8d%ae
 */
export const getList = () => {
  return new Promise((resolve, reject) => {
    const actions = Bmob.Query("actions")
    actions.order('-createdAt')
    actions.find().then(resolve)
  })
}

/**
 * 保存数据
 */
export const saveData = (msg) => {
  return new Promise((resolve, reject) => {
    const actions = Bmob.Query("actions")
    actions.set("name", msg)
    actions.save()
      .then(resolve)
      .catch(reject)
  })
}

/**
 * 监听节点下数据变化
 */
export const initWilddogListener = (cb) => {
  actionRef.child('data').on('value', cb)
}

/**
 * 触发节点变化
 * @param {*} data 
 */
export const triggerNode = (data) => {
  actionRef.set({
    'data': data
  })
}
