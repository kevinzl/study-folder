import axios from 'axios';

export default function request (method, url, data) {
    method = method.toUpperCase();
    let instance = axios.create({
        baseURL: 'http://localhost:3005', //默认端口访问的域名
        withCredentials: true, //表示跨域请求时是否需要使用凭证
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        transformRequest: [function (data) {
            let ret = []
            for (let it in data) {
                ret.push( encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) )
            }
            return ret.join('&')
        }]

    })


    //这里 响应拦截器 根据服务器返回的status 做判断 如果无权限就跳转到指定页面
    instance.interceptors.response.use(function (res) {
            // 对响应数据做点什么
            return res.data;
        },
        function (error) {
            return Promise.reject(error.response);
        }
    );

    if(method==="GET"){
        return instance.get(url,{
            params:data

        }).then((res)=>{
            return res;
        })
    }

    if(method==="POST"){
        return instance.post(url,data).then((res)=>{
            return res;
        })
    }


}

export const Get = (url, data) => request('GET', url, data);
export const Post = (url, data) => request('POST', url, data);
