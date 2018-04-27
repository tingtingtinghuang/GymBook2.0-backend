### 场馆介绍列表

**简要描述：**
- 场馆介绍列表接口

**请求URL：**
- /gymInfoList

**请求方式：**
- GET

**参数：** 
无

 **返回示例**

 ```js
 {
    "code": 1,
    "msg": "success",
    "data": [
        {
            "id": 1,
            "title": "南校区",
            "children": [
                {
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
                },
                {
                    "id": 2,
                    "title": "篮球大体育馆",
                    "description": "篮球大体育馆",
                    "html": "篮球大体育馆",
                    "addr": "北京西路",
                    "rank": 5,
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
                    "createdAt": "2018-04-25T11:16:35.000Z",
                    "updatedAt": "2018-04-25T11:16:37.000Z"
                }
            ]
        },
        {
            "id": 2,
            "title": "北校区",
            "children": []
        },
        {
            "id": 3,
            "title": "东校区",
            "children": [
                {
                    "id": 3,
                    "title": "不是本校区",
                    "description": "不是本校区",
                    "html": "不是本校区",
                    "addr": "北京西路",
                    "rank": null,
                    "time_type": 0,
                    "status": 0,
                    "logo": null,
                    "price": null,
                    "limit_num": null,
                    "buy_limit_num": null,
                    "open_time": null,
                    "limit_time": null,
                    "ref_type": null,
                    "ref_area": 3,
                    "ref_sport": null,
                    "createdAt": "2018-04-25T11:28:24.000Z",
                    "updatedAt": "2018-04-25T11:28:26.000Z"
                }
            ]
        },
        {
            "id": 4,
            "title": "东海校区",
            "children": []
        }
    ]
}
 ```

  **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|ref_area |Number   |对应校区id  |
|status |Number   |是否对外开放 0:开放 1:维修不对外开放  |