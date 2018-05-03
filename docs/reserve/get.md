### 场馆介绍详情

**简要描述：**
- 预定系统接口

**请求URL：**
- /gymReserve?id=Number&date=2018-05-02

**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |Number |查询条件(场馆id)   |
|date |不是  |Number |查询条件(日期date),默认为当天   |

 **返回示例**

 ```js
 // 根据gym的id 判断time_type若为0即按时间预约时返回示例
 {
    "code": 1,
    "msg": "success",
    "data": {
        "count": 3,
        "gym":{
            "title": "篮球场",
            "description": "东区篮球场",
            "html": "4块篮球场",
            "addr": "东区",
            "rank": 8,
            "status": 0,
            "limit_time": "2018-04-23 14:00 ~ 2018-04-23 15:00",
            "open_time": "9:00 ~ 21:00",
            "buy_limit_num": 8
        },
        "list":[
                {
                    "site":{"id": 1 }, 
                    "reservedTime":[
                        "2018-05-02 14:00 ~ 2018-05-02 15:00" 
                    ]
                },
                {
                    "site":{"id": 2},
                    "reservedTime":[
                        "2018-05-02 18:00 ~ 2018-05-02 20:00",
                        "2018-05-02 9:00 ~ 2018-05-02 10:00"
                    ]
                },
                {
                    "site":{"id": 3},
                    "reservedTime":[
                        "2018-05-02 14:00 ~ 2018-05-02 15:00",
                        "2018-05-02 18:00 ~ 2018-05-02 20:00"
                    ]
                }
        ]
}
// 根据gym的id 判断time_type若为1即按天预约时返回示例
{
    "code": 1,
    "msg": "success",
    "data":{
        "title": "篮球场",
        "description": "西区篮球场",
        "html": "4块篮球场",
        "addr": "西区",
        "rank": 9,
        "status": 0,
        "limit_time": "2018-04-23 14:00 ~ 2018-04-23 15:00",
        "open_time": "9:00 ~ 21:00",
        "limit_num": null,
        "buy_limit_num": 8
    }
}
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|status |number   |是否对外开放 0:开放 1:维修不对外开放  |
|limit_time |string   |限制预约时间|
|open_time |string   |开放时间|

***根据gym的id 判断time_type若为0即按时间预约时返回示例***
|count |number   |场馆内场地总数  |
|gym |object   |场馆信息  |
|list |array   |场馆内场地已预约时间  |

***根据gym的id 判断time_type若为1即按天预约时返回示例***
|data |object   |场馆内场地已预约时间  |