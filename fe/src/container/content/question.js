import React, { Component } from 'react';
import {Layout,Form,Input,Radio, Select,Button,Upload,message, Icon,Modal, Alert} from 'antd';
import axios from 'axios';
import './index.css';

const { Content} = Layout;

const { confirm,info } = Modal;

const { Option } = Select;

const { TextArea } = Input;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class question extends Component {
    constructor(){
        super();
        this.state = {
            value:2,
            currency: '岁',
            stand:false,
            describe:false
        }
    }

    handleClick = ()=>{
        info({
            title:'已经提交，等待系统审核，根据刚才描述系统为你提供关键字为 "嗓子，疼，咽喉发肿 "',
            onOk(){
                window.location.href = "/";
            }
        })
    }

    handleCurrencyChange = currency => {
        this.setState({
            currency: currency
        });
    };

    onChange = (e)=>{
        this.setState({
            value:e.target.value,
            stand:e.target.value == 1?true:false,
            describe:e.target.value==2?true:false
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 30 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 30 },
                sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 20,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 5,
                },
            },
        };
        return (
            <Layout style={{ padding: '0' }}>
                <Content
                style={{
                    background: '#fff',
                    padding: 20,
                    margin: 0,
                    marginRight:0
                }}>
                    <div style={{width:'1200px',margin:'0px auto'}}>
                        <h4 className="info">亲，请您预估所患疾病类型</h4>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{width:'800px'}}>
                            <Form.Item label="疾病所属大类">
                                {getFieldDecorator('big', {
                                    rules: [{
                                        required: true,
                                        // message: 'Please input your E-mail!',
                                    }],
                                })(<Input placeholder="请输入疾病所属大类"/>)}
                            </Form.Item>
                            <Form.Item label="疾病所属小类">
                                {getFieldDecorator('small', {
                                    rules: [{
                                        required: true,
                                        // message: 'Please input your E-mail!',
                                    }],
                                })(<Input placeholder="请输入疾病所属大类"/>)}
                            </Form.Item>
                            <h4 className="info">亲，请您描述自己的个人信息</h4>
                            <Form.Item label="姓名">
                                {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        // message: 'Please input your E-mail!',
                                    }],
                                })(<Input placeholder="请输入疾病所属大类"/>)}
                            </Form.Item>
                            <Form.Item label="性别">
                                {getFieldDecorator('sex', {
                                    rules: [{
                                        required: true,
                                        // message: 'Please input your E-mail!',
                                    }],
                                })(<Radio.Group defaultValue="man" buttonStyle="solid">
                                        <Radio.Button value="man">男</Radio.Button>
                                        <Radio.Button value="woman">女</Radio.Button>
                                    </Radio.Group>)}
                            </Form.Item>
                            <Form.Item label="年龄">
                                <Input type="number" style={{width:'100px'}} min="0" step="1"/>
                                <Select
                                    value={this.state.currency}
                                    style={{width:'150px',marginLeft:'5px'}}
                                    onChange={this.handleCurrencyChange}
                                >
                                    <Option value="岁">岁</Option>
                                    <Option value="月">月</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="请选择上传信息的类别">
                                {getFieldDecorator('info', {
                                    rules: [{
                                        required: true,
                                        // message: 'Please input your E-mail!',
                                    }],
                                })(<Radio.Group onChange={this.onChange} value={this.state.value}>
                                        <Radio value={1}>医院标准病例</Radio>
                                        <Radio value={2}>主观病情描述</Radio>
                                    </Radio.Group>)}
                            </Form.Item>
                            {this.state.stand?
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> 请上传医院标准病例
                                    </Button>
                                </Upload>
                                :''
                            }
                            {
                                this.state.describe?
                                <div>
                                    <Form.Item label="患病时长">
                                        {getFieldDecorator('time', {
                                            rules: [{
                                                required: true,
                                                // message: 'Please input your E-mail!',
                                            }],
                                        })(<Input placeholder="请输入患病时长"/>)}
                                    </Form.Item>
                                    <Form.Item label="严重程度">
                                        {getFieldDecorator('importance', {
                                            rules: [{
                                                required: true,
                                                // message: 'Please input your E-mail!',
                                            }],
                                        })(<Input placeholder="请输入严重程度"/>)}
                                    </Form.Item>
                                    <Form.Item label="请描述你的信息">
                                        {getFieldDecorator('message', {
                                            rules: [{
                                                required: true,
                                                // message: 'Please input your E-mail!',
                                            }],
                                        })(<TextArea rows={4} onChange = {this.hanldeChange}/>)}
                                    </Form.Item>
                                    <Upload {...props}>
                                        <Button>
                                            <Icon type="upload" /> 请上传图片更加详细描述自己的病症情况
                                        </Button>
                                    </Upload>
                                </div>
                                :''
                            }
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" className="submit-button" onClick={this.handleClick}>
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_register' })(question);
export default WrappedNormalLoginForm;