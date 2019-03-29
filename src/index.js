// Tree Shaking只支持ESModule，不支持require方式引用
// import {add} from './math.js';
// add(1,2);

// 同步代码分割
import _ from 'lodash';
console.log(_.join(['a','b','c'],'***'));

// function getComponent() {
//     return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-');
//         return element;
//     })
// }
// getComponent().then(element => {
//     document.body.appendChild(element);
// })