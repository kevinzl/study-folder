//遍历本目录下的所有js文件，输出模拟数据
const fs = require('fs');
let db={}
fs.readdirSync(__dirname).filter(
    (value) => {
        return value !== 'index.js';//过滤自身
    }
).map(
    (value) => {
        const tmp=require('./' + value)
        db=Object.assign(db,tmp)
    }
);

module.exports=db;
