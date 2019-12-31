import React, { Component } from 'react';
import { Layout,Row, Col,Input,Button,Modal,Form} from 'antd';
import { Link} from 'react-router-dom';
import './index.css';

const { Header} = Layout;

const { Search } = Input;

const { TextArea } = Input;

class header extends Component {
    constructor(){
        super();
        window.localStorage.setItem('login', false);
        this.state = {
            isshow:false,
            isshow2:false,
            islogin:window.localStorage.getItem('login')
        }
    }
    okHandle = () => {
        this.setState({
            isshow: true
        })
    }

    cancelHandle = () => {
        this.setState({
            isshow: false
        })
    }

    handleCancle = ()=>{
        window.localStorage.setItem('login', false);
        var that = this;
        setTimeout(function(){
            that.setState({
                islogin: window.localStorage.getItem('login')
            })
        },0);
    }

    ok2Handle = ()=>{
        this.setState({
            isshow2: true
        })
    }

    cancel2Handle = () => {
        this.setState({
            isshow2: false
        })
    }

    addHandle = ()=>{
        window.localStorage.setItem('login',true);
        this.setState({
            isshow:false,
            isshow2:false,
            islogin:window.localStorage.getItem('login')
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Header>
                <Row>
                    <Col span={4}>
                        <div className="title">区块链+<span>医疗</span></div>
                    </Col>
                    <Col span={8}>
                        <ul className="nav">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/question">问答</Link></li>
                        </ul>
                    </Col>
                    <Col span={7}>
                        <div>
                            <Search
                                placeholder="输入关键字或者其他"
                                onSearch={value => console.log(value)}
                                style={{ width: 300 }}
                            />
                        </div>
                    </Col>
                    <Col span={5}>
                        {/* 如果这一部分是登录的状态 那么会显示一些所对应的内容 */}
                        {this.state.islogin=='false'?
                        <div style={{float:'right'}}>
                            <Button type="link" class="login" onClick={this.ok2Handle}>立即登录</Button>
                            <Button type="default" class="regester" onClick={this.okHandle}>免费注册</Button>
                        </div>:
                        <div style={{float:'right'}}>
                            欢迎你 <Link to="/my">15227111700</Link> <span style={{cursor:'pointer'}} onClick={this.handleCancle}>退出</span>
                        </div>
                        }
                    </Col>
                    <Modal
                        width={600}
                        title="注册"
                        visible={this.state.isshow}
                        onOk={this.addHandle}
                        onCancel={this.cancelHandle}
                        >
                        <Form layout="inline" onSubmit={this.addHandle}>
                            <Form.Item label="手机号">
                                {getFieldDecorator('username',{
                                    rules: [{ required: true, message: '请输入手机号' }]
                                })(<Input placeholder="请输入手机号" style={{width:'200px'}}/>)}
                            </Form.Item>
                            <Form.Item label="密码">
                                {getFieldDecorator('pwd',{
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(<Input placeholder="请输入密码" style={{width:'200px'}} type="password"/>)}
                            </Form.Item>
                            <Form.Item label="确认密码">
                                {getFieldDecorator('acpwd',{
                                    rules: [{ required: true, message: '请确认输入密码' }]
                                })(<Input placeholder="请输入密码" style={{width:'200px'}} type="password"/>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Modal
                        width={600}
                        title="登录"
                        visible={this.state.isshow2}
                        onOk={this.addHandle}
                        onCancel={this.cancel2Handle}
                        >
                        <Form layout="inline" onSubmit={this.addHandle}>
                            <Form.Item label="手机号">
                                {getFieldDecorator('username',{
                                    rules: [{ required: true, message: '请输入手机号' }]
                                })(<Input placeholder="请输入手机号" style={{width:'200px'}}/>)}
                            </Form.Item>
                            <Form.Item label="密码">
                                {getFieldDecorator('pwd',{
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(<Input placeholder="请输入密码" style={{width:'200px'}} type="password"/>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </Row>
            </Header>
        )
    }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_register' })(header);
export default WrappedNormalLoginForm;