import React, { Component } from 'react';
import { Layout,Menu,Table} from 'antd';
import data from './mock';
import axios from 'axios';
import { Link} from 'react-router-dom';
import './index.css';

const { Content} = Layout;

export default class content extends Component {
    constructor(){
        super();
        this.state = {
            current: 'mail',
        }

        this.data = data;

        this.columns = [
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
                width:300,
                render:(text,record)=>{
                    return <Link to={{
                        pathname:'/detail',
                        state:{
                            txt:text
                        }
                    }} className="line" >{text}</Link>
                }
            },
            {
                title: '关键词',
                dataIndex: 'keyword',
                key: 'keyword',
                width: 200
            },
            {
                title: '回答数',
                dataIndex: 'asknumber',
                key: 'asknumbeer',
                width: 50
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: 70
            },
            {
                title: '更新时间',
                dataIndex: 'updatetime',
                key: 'updatetime',
                width: 90
            },
        ];
    }

    // handledata = ()=>{
    //     this.data = data.reverse();
    // }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        this.data = data.reverse();
    };
    render() {
        return (
            <Layout style={{ padding: '0' }}>
                <Content
                style={{
                    background: '#fff',
                    padding: 20,
                    margin: 0,
                    marginRight:0,
                }}>
                    <div style={{width:1200,margin:'0px auto'}}>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="mail">
                                最新回答
                            </Menu.Item>
                            <Menu.Item key="alipay" onClick={this.handledata}>
                                等待回答
                            </Menu.Item>
                        </Menu>
                        <Table
                            columns={this.columns}
                            dataSource={this.data}
                            style={{clear:'both',paddingTop:'15px'}}
                            pagination={{
                                pageSize:10,
                                total: 20,
                            }}
                        />
                    </div>
                </Content>
            </Layout>
        )
    }
}