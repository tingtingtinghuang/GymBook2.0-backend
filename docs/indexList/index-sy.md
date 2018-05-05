### 首页管理制度列表

**简要描述：**
- 获取首页管理制度接口

**请求URL：**
- /managementSystem

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
            "content": "中山大学运动管理方法",
            "systemTime": "2018-02-12"
        },
        {
            "content": "中山大学运动管理执行制度",
            "systemTime": "2018-04-22"
        }
    ]
     
         
     
 }
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|content |string   |内容  |
|systemTime |string   |时间  |