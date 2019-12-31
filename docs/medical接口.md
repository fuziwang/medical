## 接口文档

登录

```js
/login/

接口类型：post
参数：
{
    tel:
    pwd:
}
返回类型：
{
    status:0,
    message:'success'
}

{
    status:1,
    message:'login failed'
}
```

注册

```js
/reg/

接口类型：post
参数：
{
    tel:
    pwd:
    acpwd:
}
返回类型：
{
    status:0,
    message:'success'
}

{
    status:1,
    message:'reg failed'
}
```

最新回答数据获取

```json
/getnew/

接口类型：get
参数：
{
    page:
}
返回类型：
{
    status:0,
    data:
    {
        list:{[]},
		total:,
    }
}

{
    status:1,
    message:'getnew failed'
}
```

等待回答数据获取

```json
/getac/

接口类型：get
参数：
{
    page:
}
返回类型：
{
    status:0,
    data:
    {
        list:{[]},
		total:,
    }
}

{
    status:1,
    message:'getac failed'
}
```

详细问答信息获取

```json
/getdetail/

接口类型：get
参数：
{
    id:
}
返回类型：
{
    status:0,
    data:
    {
        comentlist:{[]},
		detail:{},
    }
}

{
    status:1,
    message:'getdetail failed'
}
```

问答信息提问

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191227215232399.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191227215325572.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191227215341955.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191227215347483.png)

```json
/ask/

接口类型：post
参数：
{
    见上图
}
返回类型：
{
    status:0,
    message:'success'
}

{
    status:1,
    message:'getdetail failed'
}
```

我的信息获取

```json
/getmy/

接口类型：get
参数：
{
    username:
    pwd:
}
返回类型：
{
    status:0,
    data:{
        
    }
}

{
    status:1,
    message:'getmy failed'
}
```