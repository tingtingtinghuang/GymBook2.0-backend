### 首页通知广告列表

**简要描述：**
- 获取首页通知广告接口

**请求URL：**
- /advertisement

**请求方式：**
- get

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |


 **返回示例**

 ```js
 {
     "code": 1,
     "msg": "response message",
     "data":[
        {
            "content": "运动专项经费登记补发通知",
            "informTime": "2018-02-12"
        },
        {
            "content": "关于运动经费补发说明",
            "informTime": "2018-04-22"
        }
    ]
     
         
     
 }
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|content |string   |内容  |
|informTime |string   |时间  |