### 场馆介绍列表

**简要描述：**
- 场馆列表查询接口

**请求URL：**
- /gymSearchList?typeId=1&areaId=1&searchKey=球

**请求方式：**
- GET

**参数：**
- typeId  场地类型id     不限制时   传入空字符串''
- areaId  场地所属区域id   不限制时   传入空字符串''
- searchKey 搜索关键字     不限制时   传入空字符串''

**返回示例**

 ```js
 {
     "code": 1,
     "msg": "success",
     "data": {
         "B": [
             {
                 "id": 1,
                 "title": "波动球馆",
                 "description": "111",
                 "html": "11",
                 "addr": "11",
                 "rank": 11,
                 "time_type": 11,
                 "status": 11,
                 "logo": "11",
                 "price": "11",
                 "limit_num": 11,
                 "buy_limit_num": 11,
                 "open_time": "11",
                 "limit_time": "11",
                 "ref_type": 1,
                 "ref_area": 1,
                 "ref_sport": 1,
                 "createdAt": "2018-04-17T21:09:52.000Z",
                 "updatedAt": "2018-05-24T21:09:56.000Z"
             }
         ],
         "Y": [
             {
                 "id": 2,
                 "title": "羽毛球馆",
                 "description": "谈恋爱的好地方",
                 "html": "12",
                 "addr": "12",
                 "rank": 12,
                 "time_type": 0,
                 "status": 12,
                 "logo": "12",
                 "price": "12",
                 "limit_num": 12,
                 "buy_limit_num": 12,
                 "open_time": "12",
                 "limit_time": "12",
                 "ref_type": 1,
                 "ref_area": 1,
                 "ref_sport": 1,
                 "createdAt": "2018-04-26T21:12:15.000Z",
                 "updatedAt": "2018-04-26T21:12:18.000Z"
             }
         ]
     }
 }
 ```

  **返回参数说明**

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data | 对象   |拼音首字母及对应的查询结果  |
