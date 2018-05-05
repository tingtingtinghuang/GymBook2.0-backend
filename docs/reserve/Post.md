### 新增预定

**简要描述：**
- 预定系统接口：添加新的预定

**请求URL：**
- /gymReserve

**请求方式：**
- POST

**参数：** 
//time_type若为1即按天预约

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|time_type |是  |Number |预约类型   |
|gymId |是  |Number |场馆id   |
|userid |是  |String |用户id   |
|reservedDate |是  |String |预约日期   |
|buy_num |否  |Number |预约场地数  |
|totalPrice |是  |Number |总共价格   |

//time_type若为0即按时间预约

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|time_type |是  |Number |预约类型   |
|gymId |是  |Number |场馆id   |
|userid |是  |String |用户id   |
|reservedTimeLists |是  |List |预约场次集合   |
|buy_num |是  |Number |预约场地数   |
|totalPrice |是  |Number |总共价格   |

**参数说明：** 
reservedTimeLists: {
"site":{"id": Num1 },
"reservedTime":["StartTime ~ EndTime" ]
,
"site":{"id": Num2 },
"reservedTime":["StartTime ~ EndTime" ]
,
......
}

 **返回示例**

 ```js
  {
    "code": 1,
    "msg": "success",
}
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
