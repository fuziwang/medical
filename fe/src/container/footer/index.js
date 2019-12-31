import React, { Component } from 'react';
import { Layout} from 'antd';
const {Footer } = Layout;

export default class footer extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Design ©2019 Created by 京沪邮贸联盟</Footer>
        )
    }
}
