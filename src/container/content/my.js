import React, { Component } from 'react';
import { Layout,Menu,Icon, Button, Table} from 'antd';
import axios from 'axios';
import './index.css';

const { MenuItem } = Menu;

const { Content,Sider} = Layout;

export default class my extends Component {
    constructor(){
        super();
        this.state = {
            key:'sub1'
        }
        this.columns = [
            {
                title: '交易记录',
                dataIndex: 'title',
                key: 'title',
            },
        ]
    }

    handleClick = (key)=>{
        console.log(1);
        this.setState({
            key:key
        })
    }
    render() {
        return (
            <Layout style={{ padding: '0' }}>
                <Content
                style={{
                    background: '#fff',
                    padding: 20,
                    margin: 0,
                    marginRight:0
                }}>
                    <Layout style={{width:'1200px',margin:'0px auto'}}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <div>
                                <img src={[require("../../assets/images/personimg.png")]} style={{width:'150px',height:'150px',display:'block',margin:'0px auto'}}/>
                                <p style={{height:'40px',color:'#333',fontSize:'14px',textAlign:'center'}}>0x63917B02C0F4d7B5aDf<br/>b2208756Fb4bdfE364983</p>
                            </div>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub1']}
                            >
                                <Menu.Item key="sub1" onClick={()=>{this.handleClick('sub1')}}><Icon type="user"/><span>我的主页</span></Menu.Item>
                                <Menu.Item key="sub2"  onClick={()=>{this.handleClick('sub2')}}><Icon type="laptop"/><span>我的提问</span></Menu.Item>
                                <Menu.Item key="sub3"  onClick={()=>{this.handleClick('sub3')}}><Icon type="laptop"/><span>我的回答</span></Menu.Item>
                                <Menu.Item key="sub4" onClick={()=>{this.handleClick('sub4')}}><Icon type="notification"/><span>我的积分</span></Menu.Item>                               
                            </Menu>
                        </Sider>
                        <Content style={{ background:'#fff',padding:'20px'}}>
                            {this.state.key == 'sub1'?
                                <div>
                                    <p style={{height:'30px',borderBottom:'1px solid #ccc',fontSize:'16px'}}>我的主页</p>
                                    <div>
                                        (ﾟ∀ ﾟ)
                                        暂时没有任何数据
                                    </div>
                                </div>:''
                            }
                            {this.state.key == 'sub2'?
                                <div>
                                    <p style={{height:'30px',borderBottom:'1px solid #ccc',fontSize:'16px'}}>我的提问</p>
                                    <div>
                                        (ﾟ∀ ﾟ)
                                        暂时没有任何数据
                                    </div>
                                </div>:''
                            }
                            {this.state.key == 'sub3'?
                                <div>
                                    <p style={{height:'30px',borderBottom:'1px solid #ccc',fontSize:'16px'}}>我的回答</p>
                                    <div>
                                        (ﾟ∀ ﾟ)
                                        还没有任何回答哦
                                        <img src={[require("../../assets/images/token.png")]} style={{display:'block',margin:'0px auto',cursor:'pointer'}}/>
                                    </div>
                                </div>:''
                            }
                            {this.state.key == 'sub4'?
                                <div>
                                    <p style={{height:'30px',borderBottom:'1px solid #ccc',fontSize:'16px'}}>我的积分</p>
                                    <div>
                                        当前积分情况：<b>0</b>
                                        <Table columns={this.columns} style={{marginTop:'10px'}}/>
                                    </div>
                                </div>:''
                            }
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}