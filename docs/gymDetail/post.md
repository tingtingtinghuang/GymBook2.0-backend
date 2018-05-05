### 场馆新增

**简要描述：**
- 场馆创建接口

**请求URL：**
- /gymDetail

**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|gymId |是  |Number |查询条件(场馆id)   |
|title |是  |String |查询条件(场馆标题)   |
|description |是  |String |查询条件(场馆描述)   |

 **返回示例**

 ```js
 {
    "code": 1,
    "msg": "success",
    "data": {
        "id": 1,
        "title": "篮球体育馆",
        "description": "篮球体育馆",
        "html": "篮球体育馆",
        "addr": "北京西路",
        "rank": 4,
        "time_type": 0,
        "status": 0,
        "logo": null,
        "price": "11",
        "limit_num": 11,
        "buy_limit_num": 11,
        "open_time": null,
        "limit_time": null,
        "ref_type": 1,
        "ref_area": 1,
        "ref_sport": 1,
        "createdAt": "2018-04-25T11:13:58.000Z",
        "updatedAt": "2018-04-25T11:14:01.000Z"
    }
}
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|ref_area |number   |对应校区id  |
|status |number   |是否对外开放 0:开放 1:维修不对外开放  |