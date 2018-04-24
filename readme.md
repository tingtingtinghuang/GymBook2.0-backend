# 后端
[项目模块](http://note.youdao.com/noteshare?id=a6da5822283bf8cecc4e04a2df2a3b0d)

# 项目结构

- app.js            主入口
- app               项目主目录
    - control           控制层
    - model             数据库model层
    - route-list        路由层
        - middleware        中间件
    - unit              工具件
    - route.js          路由入口文件
- conf              配置文件


# 接口定义
总体形式为
```
{
    code: 1     // 只有1为请求成功 其他值需要额外处理
    msg:  'ok'  // 描述信息
    data: {} // 具体data
}

```

