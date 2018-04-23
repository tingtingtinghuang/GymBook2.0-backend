
# 此接口为备份文件 无需关注！！

# POST /students/oauth  登录
发送数据格式：
```
{
	login_id:
   login_password: 
}
```
返回JSON如下
```
{
	isok:0/1,
	token
}
```


# POST /students/signup 注册
发送数据格式：
```
{
     login_id:,
     login_password:
}
```
获得stuid学生信息,返回JSON如下
```
{
	isok:0/1,
	token
}
```

# GET /appointment 获得stuid所有订单
发送数据格式如下：
```
{
	login_id:
	page_size:
	current_page:
}
```
得到的数据：
```
{
	date:
	campus:
	time:
	kind:
	site_no
	price:
	state:
}
```
  
# GET /stuinventory 获得学生页面的可预订场地信息
不需要发送查询数据
返回的数据格式如下：
```
{
	site_no:
	date:
	time:
	price:
 	state:
	
}
```
# GET /gym 获得所有场馆，用于开关闭场馆
不需要发送查询数据
返回的数据如下：
```
{
	gym_id:
	campus:
	kind://种类，比如：羽毛球场/网球场
	state
}
```
# GET /managerinventory 获得今明场馆预定情况
不需要发送查询数据

# GET /balance 获得stuid的余额
发送数据格式如下：
```
{
	login_id
}
```
# POST /order  创建一个新订单
发送数据格式如下：
```
{
	site_id:,
	date:,
	time:,
	login_id:,
	state:,
	price:
}
```

# PUT /password 修改stuid的密码
发送数据格式如下：
```
{
	login_id:
}
```
# PUT /gym/close 关闭gym_id场馆
# PUT /gym/open 开放gym_id 场馆
发送数据格式如下：
```
{
	gym_id
}

```
# GET /notice 得到所有通知
# DELETE /notice 删除id的通知
发送数据格式如下：
```
{
	notice_id:
}
```
# POST /notice 新增通知
发送数据格式如下：
```
{
	title:,
	content:
}
```

# GET /south-tennis 得到南校区网球场
# GET /east-tennis 得到东校区网球场
# GET /south-badminton 南校区羽毛球场
# GET /east-badminton 东校区羽毛球场 
返回的数据格式如下

```
{
	site_id
	site_no
	date
	time
	price
	state
	no://如果被预定，则为预定人的id
}
```

# PUT /deposit   
发送的数据格式如下：
```
{
	login_id:,
	money:
}
``` 
