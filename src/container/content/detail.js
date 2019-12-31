import React, { Component } from 'react';
import { Layout,Breadcrumb,Input,Modal,Form} from 'antd';
import axios from 'axios';
import './index.css';

const { Content} = Layout;

const { TextArea } = Input;

class detail extends Component {
    constructor () {
        super();
        this.state = {
            isshow:false,
            username: '',
            content: '',
            comments: [{username:'fuziwang',content:'上海第一医院的王大夫诊断的不错'}],
            comments2:[{username:'fuziwang',content:'123'}]
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (!this.state.username) return alert('请输入用户名')
        if (!this.state.content) return alert('请输入评论内容')
        this.state.comments.push({
            username: this.state.username,
            content: this.state.content,
        });
        this.setState({
            comments: this.state.comments,
            content:''
        })
    }

    addHandle = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.state.comments2.push({
                    username:values.username,
                    content:values.content,
                });
                this.setState({
                    comments2:this.state.comments2,
                    isshow:false
                })
            }
        });
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

    render() {
        const { getFieldDecorator } = this.props.form;
        var txt = this.props.location.state ? this.props.location.state.txt:'做了支气管激发试验后胸部难受';
        var that = this;
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
                        <Breadcrumb style={{borderBottom:'1.5px solid #1890ff',height:'30px'}}>
                            <Breadcrumb.Item>区块链+医疗</Breadcrumb.Item>
                            <Breadcrumb.Item style={{color:'#333'}}>{txt}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{marginTop:'20px'}}></div>
                        <div className="describe">
                            <div>
                                <h3 style={{fontWeight:'600',color:'#555'}}>{txt}</h3>
                                <div>
                                    <span className="spanright">男|24岁</span> <span className="spanright">2019年12月19日 星期四 12:24</span> <span>5人回复</span>
                                    <div>
                                        <h4 className="healthtitle">健康咨询描述：</h4>
                                        <div>家里发生火灾吸入烟症状咳嗽有点哮喘咳嗽有黑痰肺片显示纹理增粗这种可以恢复吗</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 style={{fontSize:'16px',height:'30px',marginTop:'20px',borderBottom:'1.5px solid #1890ff'}}>发表评论</h4>
                        <div className='comment-input'>
                            <div className='comment-field'>
                            <span className='comment-field-name'>用户名：</span>
                            <div className='comment-field-input'>
                                <input
                                value={this.state.username}
                                onChange={this.handleUsernameChange.bind(this)} />
                            </div>
                            </div>
                            <div className='comment-field'>
                            <span className='comment-field-name'>评论内容：</span>
                            <div className='comment-field-input'>
                                <textarea
                                value={this.state.content}
                                onChange={this.handleContentChange.bind(this)} />
                            </div>
                            </div>
                            <div className='comment-field-button'>
                                <button
                                    onClick={this.handleSubmit.bind(this)}>
                                    发布
                                </button>
                            </div>
                            <div>
                                {this.state.comments.map((comment, i) =>
                                    <div className='comment'>
                                        <div className='comment-user'>
                                            <span>{comment.username} </span>：
                                        </div>
                                        <p>{comment.content}</p>
                                        <div className='button'>
                                            <button onClick={this.okHandle.bind(this)}>
                                                补充说明
                                            </button>
                                        </div>
                                        {that.state.comments2.map((comments,j)=>
                                            <div className='comment' style={{marginLeft:'20px'}}>
                                                <div className='comment-user'>
                                                    <span>{comments.username} </span>：
                                                </div>
                                                <p>{comments.content}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <Modal
                        width={600}
                        title="评论"
                        visible={this.state.isshow}
                        onOk={this.addHandle.bind(this)}
                        onCancel={this.cancelHandle}
                        >
                        <Form layout="inline" onSubmit={this.addHandle.bind(this)}>
                            <Form.Item label="评论用户">
                                {getFieldDecorator('username',{
                                    rules: [{ required: true, message: '请输入用户名' }]
                                })(<Input placeholder="请输入用户名" style={{width:'200px'}}/>)}
                            </Form.Item>
                            <Form.Item label="评论内容">
                                {getFieldDecorator('content',{
                                    rules: [{ required: true, message: '请输入评论' }]
                                })(<TextArea placeholder="请输入评论"/>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </Content>
            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_register' })(detail);
export default WrappedNormalLoginForm;