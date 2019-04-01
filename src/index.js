import _ from 'lodash';
import $ from 'jquery';

const dom = $('div');
dom.html(_.join(['dell', 'lee1', 'hello'],'---'));
$('body').append(dom);