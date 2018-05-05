### 首页场地列表

**简要描述：**
- 获取首页场地接口

**请求URL：**
- /areaList?siteType=String&sportType=String

**请求方式：**
- get

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|siteType |否  |String | 选择场馆  |
|sportType |否  |String | 运动类型  |


 **返回示例**

 ```js
 {
     "code": 1,
     "msg": "response message",
     "data":[
        {
            "content": "珠海校区新体育馆球场",
            "startTime": "16:22",
            "endTime": "17:11"，
            "remainingTime":"65"
        },
        {
            "content": "珠海校区羽毛球场",
            "startTime": "12:11",
            "endTime": "14:22",
            "remainingTime":"65"
        }
    ]
     
         
     
 }
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|content |string   |场地名称  |
|startTime |string   |开始时间  |
|endTime |string   |结束时间  |
|remainingTime |string   |剩余时间  |