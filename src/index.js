// Tree Shaking只支持ESModule，不支持require方式引用
import {add} from './math.js';
add(1,2);