/**
 * Created by caofan on 2018/4/24.
 */
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'; //使用require导入css文件

render(<Greeter />, document.getElementById('root'));