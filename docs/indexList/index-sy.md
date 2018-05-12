### 首页管理制度、通知广告列表

**简要描述：**
- 获取首页管理制度接口
- 获取首页通知广告接口

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
     "data":{
        adList:[ 
            {
                "text": "运动专项经费登记补发通知",
                "informTime": "2018-02-12"
            },
            {
                "text": "关于运动经费补发说明",
                "informTime": "2018-04-22"
            }
        ],
        syList:[
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
     
         
     
 }
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|adList |array   |通知广告列表数据  |
| text|string   |通知广告列表数据内容  |
| informTime|string   |通知广告列表数据时间 |
|syList |array   |管理制度列表数据  |
|content |string   |管理制度列表数据内容  |
|systemTime |string   |管理制度列表数据时间  |