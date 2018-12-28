import { Post, Get } from './request'

//判断是否生产环境 已在webpack内定义
//const isProduction = ENV ==='production'

/**
* 请求api地址前缀,用于区别mock数据和真实服务器api
* 如果不是 mock 数据，api前缀等于 webpack 内 proxy选项配置的target值
*/

let MOCK = true;
let apiBaseUrl = '';

//样例 获取登录结果
export const getTodoItemList = (params) => {
    //如果开发时已有接口
    //return Post(apiBaseUrl + '/cms/base/getLoginInfo',params)

    //如果开发时还没有接口，一种可能的处理方式如下
    if(MOCK){
        //自己在json-server内先定义一个
        return Get(apiBaseUrl + '/getTodoItemList',params)
    } else {
        //后面接口文档提供以后的代码
        // return Post(apiBaseUrl + '/cms/base/getLogin',params)
    }
}

