### 新增预定

**简要描述：**
- 预定系统接口：添加新的预定

**请求URL：**
- /reserve

**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|userId |是  |String |用户id   |
|id |是  |Number |场馆id   |
|siteId |否  |Number |场地id   |
|reserveTime |是  |String |预约日期   | 2018-05-02 14:00 ~ 15:00


**返回示例**
```
//成功
{
    "code": 1,
    "msg": "success",
}
//失败
{
    "code": 0,
    "msg": "fail",
}
 ```
