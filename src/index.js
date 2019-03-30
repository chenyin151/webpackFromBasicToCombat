// Tree Shaking只支持ESModule，不支持require方式引用
// import {add} from './math.js';
// add(1,2);
// import '@babel/polyfill'

// 同步代码分割
import _ from 'lodash';
// console.log(_.join(['a','b','c'],'***'));


//这种方式可以实现懒加载
function getComponent() {
    return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Dell', 'Lee'], '-');
        return element;
    })
}
console.log('jjj')
// document.body.addEventListener('click', function(){
//     console.log('click')
//     getComponent().then(element => {
//         document.body.appendChild(element)
//     })
    
// })

getComponent().then(element => {
    document.body.appendChild(element);
})


// import './test.js';
// console.log(test.name);

// import _ from 'lodash';
// var element = document.createElement('div');
// element.innerHTML = _.join('[Dell, Lee]','-');
// document.body.appendChild(element);
