### 场馆介绍详情

**简要描述：**
- 预定系统接口，获得场馆预定情况

**请求URL：**
- /area/type?&date=2018-05-02
- 后台根据area/type 判断time_type，若为0,即按时间预约时返回示例
**请求方式：**
- GET

**参数：**

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|area |是  | south/north/zhuhai/east|   |
|type |是  | swimming/pingpong/tennis/fitness/football|   |
|date |不是  |Number |查询条件(日期date),默认为当天   |

 **返回示例**

 ```js
 
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
            "rank": 4,
            "open_time": "2018-04-23 12:00 ~ 14:00"
        },
        "list":[
                {
                    
                    "reservedTime":[
                        "2018-05-02 14:00 ~ 15:00"
                    ]
                },
                {
                   
                    "reservedTime":[
                        "2018-05-02 18:00 ~ 20:00",
                        "2018-05-02 09:00 ~ 10:00"
                    ]
                },
                {
                    
                    "reservedTime":[
                        "2018-05-02 14:00 ~ 15:00",
                        "2018-05-02 18:00 ~ 20:00"
                    ]
                }
        ]
}
// 根据gym的id 判断time_type若为1即按天预约时返回示例
{
    "code": 1,
    "msg": "获得按天预定的订单信息",
    "data":{
      "title": "东校园游泳池",
      "description": "东校园游泳池开放时间为：6：30-8：00，14：30-18：00，19：30-21：00。 可以网上预订和现场扣费预订，网上可提前一天预订。 建议先网上预订，现场验证可节省入场时间。如现场预订需输入校园卡密码，会增加入场时间。",
      "html": "4块篮球场",
      "addr": " 英东游泳场",
      "rank": 9,
      "price":3,
      
      "sessions":[
        {
          "date": "2018-05-08",

          "timeSlot": [
            {
              "open_time": "08:00-12:00",
              "status":"0",
            }]
        },
        {
          "date": "2018-05-09",
          "timeSlot": [
            {
              "open_time": "14:00-18:00",
              "status":"0",
            },
            {
              "open_time": "18:00-20:00",
              "status":"0",
            }]
        }
      ]
     
    }
  }
 ```

  **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|status |number   |是否对外开放 0:开放 1:维修不对外开放  |
|limit_time |string   |限制预约时间|
|open_time |string   |开放时间|

#### 根据gym的id 判断time_type若为0即按时间预约时返回示例

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|count |number   |场馆内场地总数  |
|gym |object   |场馆信息  |
|list |array   |场馆内场地已预约时间  |

#### 根据gym的id 判断time_type若为1即按天预约时返回示例

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |object   |场馆信息  |
