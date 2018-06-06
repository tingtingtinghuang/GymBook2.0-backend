const { model: newsModel } = require('../new');
const sequelize = require('sequelize');

async function init() {


    let result = await newsModel.build({
        title: '华为正开发自主操作系统以备不测 你认为有必要吗',
        html: '<div class="article-content" id="artibody">\n' +
        '                        <p>然而，现在有新消息称，华为一直在自主<a data-link="1" href="https://cloud.tencent.com/developer/labs/gallery?fromSource=gwzcw.908633.908633.908633" target="_blank">开发</a>智能手机操作系统。不论真假，这点让人确实让人感到有点意外。而对此你自己有什么看法？说实话，就目前来看这至少不是坏事。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/68af3a1cfc0a8f7.jpg" data-index="0" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/68af3a1cfc0a8f7.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/68af3a1cfc0a8f7.jpg"></a><br>众所周知，美国商务部已经禁止中国中兴通讯从美国市场上购买零部件产品（包括高通芯片等产品和服务），期限长达七年。这一官方公告发布之后，一连串糟糕的事情也随之而来了，中兴还被认为威胁某些“国家安全风险”，所以也可能会失去 Android 授权许可。总之，由于美国和中国之间的关系变得紧张，不少科技公司都受到了不同程度的影响。</p><p>最近，美国司法部还宣布，目前正在调查华为是否违反了美国对伊朗的制裁。如果美国判定是事实的话，那么华为也可能会面临刑事处罚，陷入类似中兴通讯的境地。近日最新消息称，很显然，华为早已考虑到了这些因素，所以自从 2012 年美国政府开始调查中兴之后，华为的自主操作系统就一直在内部研发当中，并且该系统支持智能手机和平板电脑。</p><div id="cbhahaha" class="otherContent_01" style="display: block; margin: 10px 20px 10px 0px; float: left; overflow: hidden; clear: both; padding: 4px;"><ins id="CbADsArticle"><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- cnBeta.COM 画中画 300x250 #1 --><ins class="adsbygoogle" style="display: inline-block; width: 300px; height: 250px;" data-ad-client="ca-pub-8643973705961200" data-ad-slot="5469364173" data-adsbygoogle-status="done"><ins id="aswift_8_expand" style="display:inline-table;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><ins id="aswift_8_anchor" style="display:block;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><iframe width="300" height="250" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_8" name="aswift_8" style="left:0;position:absolute;top:0;width:300px;height:250px;"></iframe></ins></ins></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></ins></div><p>也就是说，华为现在不仅有个人电脑业务，在公司内部也有自主开发移动操作系统。据称，华为发展自主操作系统是其创始人兼总裁任正非提出的要求。不过，华为自主操作系统暂时还无法看到曙光，因为消息称该系统并没有 Android 那么完美，离大家所期望的还很远，并且第三方的支持严重缺乏，相信没有人想要一台不是安卓却只能考安卓应用而活的手机。</p><p>Android 和 iOS 平台最大的优势在于生态系统，尤其是应用程序，大量应用目前已应有尽有，数以百万计。前面提到的那些“其他”操作系统，起初也希望弯道超车占领市场，但都在第三方应用的支持方面摔了跟头，不少只能通过内置模拟器来实现对 Android 应用的支持，毕竟 Android 和 iOS 平台如此庞大规模的应用生态，需要大量开发者支持以及数年的时间才能形成。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/3190e5b7413d439.jpg" data-index="1" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/3190e5b7413d439.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/3190e5b7413d439.jpg"></a></p><p>最近在北京举行的全球移动互联网大会期间，华为旗下荣耀品牌总裁赵明接受媒体采访时曾表示：“（开发自主操作系统）这是一个能力和必要性的问题，毋庸置疑，华为有能力做到这一点。但目前我认为这并非是必要性的，因为我们正与谷歌密切合作，并将继续使用其 Android 系统。”</p><p>他还表示，“在可预见未来的情况下，华为不打算发布自己的操作系统。我们专注基于 Android 操作系统提供的产品，但是对移动操作系统持开放态度。”</p><p>以华为的规模来看，确实有实力自主开发操作系统，尤其是面对研发投入的压力上。上个月华为年报显示，2017 年华为研发费用达到了 897 亿元人民币，同比增长 17.4%，其研发指出占据了全年收入的 14.9%，仅次于<a data-link="1" href="http://t.cn/R61I7ap" target="_blank">亚马逊</a>，超过谷歌，近十年华为投入研发费用超过 3940 亿元。另外，目前华为全球研人员约 8 万名， 占公司总人数 45%，累积专利授权达到 74307 件，有 90% 以上为专利发明。</p><p>无论如何，如果华为也被禁止使用来自美国的 Android 操作系统，与中兴相比至少华为还有一条早就筹划已久的出路，即在迫不得已的情况下采用自主操作系统。另外，华为目前已经不依赖于高通处理器，反而让世人认识到了国产最强的麒麟芯片。余承东去年曾对外公开表示，华为的麒麟芯片复杂程度超过了英特尔电脑芯片。</p><p>不过，华为海思半导体的手机麒麟芯片仅自给自足，并不对外开放供应。所以，目前中国半导体芯片仍大量依靠进口，来自普华永道(PwC)的数据显示，中国市场占据全球芯片销售额 60% 以上，而美国则是半导体芯片最大的出口国。当然，华为并非所有手机都搭载麒麟芯片，低端机也有采购来自高通和联发科的芯片。对此华为表示，致力于多供应商有助于保持业务健康发展，不应把所有鸡蛋放进一个篮子里。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/b024df5a91a6e86.jpg" data-index="2" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/b024df5a91a6e86.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/b024df5a91a6e86.jpg"></a></p><p>最后，有消息表示，目前华为仍会继续依赖谷歌的 Android 系统，除非美国司法部的调查会有比较严重的结果。如果有那一天，相信未来华为移动设备的经营方式将会有重大转变。不过对于美国方面的调查，华为表示一点也不担心，声称公司遵守法律，而且只要继续诚实地做生意，就一定会有好结果。</p><p>话说回来，若华为失去 Android 牌照而被迫使用自主操作系统，这并不一定是坏事，因为风水轮流转，也许将这有助于打破市场垄断，甚至引发有一场新的移动革命，只不过这可能是一个相当艰难而漫长的过程。</p>                    </div>',
        view: '2333',
        type: 0
    }).save();

    let result2 = await newsModel.build({
        title: '百度旗下金融业务完成正式分拆 融资超过19亿美元',
        html: '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n' +
        '                <div id="slideNoInsertDefault"></div>\n' +
        '                <div class="dy_box ss_none">\n' +
        '                    <div class="bg_top"><span></span></div>\n' +
        '                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n' +
        '                    <div class="bg_bottom"><span></span></div>\n' +
        '                </div>\n' +
        '                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n' +
        '                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n' +
        '<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n' +
        '\n' +
        '                </div>\n' +
        '            </div>',
        view: '2333',
        type: 0
    }).save();

    let result3 = await newsModel.build({
        'title': '中山大学体育部体育场馆服务性收费公示',
        'description': '网球场1号、2号场周末、假日（白天）元/场/小时30;网球场1号、2号场周末、假日（夜间）元/全场/小时40',
        'html': '<div class="article-content" id="artibody">\n                        <p>然而，现在有新消息称，华为一直在自主<a data-link="1" href="https://cloud.tencent.com/developer/labs/gallery?fromSource=gwzcw.908633.908633.908633" target="_blank">开发</a>智能手机操作系统。不论真假，这点让人确实让人感到有点意外。而对此你自己有什么看法？说实话，就目前来看这至少不是坏事。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/68af3a1cfc0a8f7.jpg" data-index="0" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/68af3a1cfc0a8f7.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/68af3a1cfc0a8f7.jpg"></a><br>众所周知，美国商务部已经禁止中国中兴通讯从美国市场上购买零部件产品（包括高通芯片等产品和服务），期限长达七年。这一官方公告发布之后，一连串糟糕的事情也随之而来了，中兴还被认为威胁某些“国家安全风险”，所以也可能会失去 Android 授权许可。总之，由于美国和中国之间的关系变得紧张，不少科技公司都受到了不同程度的影响。</p><p>最近，美国司法部还宣布，目前正在调查华为是否违反了美国对伊朗的制裁。如果美国判定是事实的话，那么华为也可能会面临刑事处罚，陷入类似中兴通讯的境地。近日最新消息称，很显然，华为早已考虑到了这些因素，所以自从 2012 年美国政府开始调查中兴之后，华为的自主操作系统就一直在内部研发当中，并且该系统支持智能手机和平板电脑。</p><div id="cbhahaha" class="otherContent_01" style="display: block; margin: 10px 20px 10px 0px; float: left; overflow: hidden; clear: both; padding: 4px;"><ins id="CbADsArticle"><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- cnBeta.COM 画中画 300x250 #1 --><ins class="adsbygoogle" style="display: inline-block; width: 300px; height: 250px;" data-ad-client="ca-pub-8643973705961200" data-ad-slot="5469364173" data-adsbygoogle-status="done"><ins id="aswift_8_expand" style="display:inline-table;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><ins id="aswift_8_anchor" style="display:block;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><iframe width="300" height="250" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_8" name="aswift_8" style="left:0;position:absolute;top:0;width:300px;height:250px;"></iframe></ins></ins></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></ins></div><p>也就是说，华为现在不仅有个人电脑业务，在公司内部也有自主开发移动操作系统。据称，华为发展自主操作系统是其创始人兼总裁任正非提出的要求。不过，华为自主操作系统暂时还无法看到曙光，因为消息称该系统并没有 Android 那么完美，离大家所期望的还很远，并且第三方的支持严重缺乏，相信没有人想要一台不是安卓却只能考安卓应用而活的手机。</p><p>Android 和 iOS 平台最大的优势在于生态系统，尤其是应用程序，大量应用目前已应有尽有，数以百万计。前面提到的那些“其他”操作系统，起初也希望弯道超车占领市场，但都在第三方应用的支持方面摔了跟头，不少只能通过内置模拟器来实现对 Android 应用的支持，毕竟 Android 和 iOS 平台如此庞大规模的应用生态，需要大量开发者支持以及数年的时间才能形成。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/3190e5b7413d439.jpg" data-index="1" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/3190e5b7413d439.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/3190e5b7413d439.jpg"></a></p><p>最近在北京举行的全球移动互联网大会期间，华为旗下荣耀品牌总裁赵明接受媒体采访时曾表示：“（开发自主操作系统）这是一个能力和必要性的问题，毋庸置疑，华为有能力做到这一点。但目前我认为这并非是必要性的，因为我们正与谷歌密切合作，并将继续使用其 Android 系统。”</p><p>他还表示，“在可预见未来的情况下，华为不打算发布自己的操作系统。我们专注基于 Android 操作系统提供的产品，但是对移动操作系统持开放态度。”</p><p>以华为的规模来看，确实有实力自主开发操作系统，尤其是面对研发投入的压力上。上个月华为年报显示，2017 年华为研发费用达到了 897 亿元人民币，同比增长 17.4%，其研发指出占据了全年收入的 14.9%，仅次于<a data-link="1" href="http://t.cn/R61I7ap" target="_blank">亚马逊</a>，超过谷歌，近十年华为投入研发费用超过 3940 亿元。另外，目前华为全球研人员约 8 万名， 占公司总人数 45%，累积专利授权达到 74307 件，有 90% 以上为专利发明。</p><p>无论如何，如果华为也被禁止使用来自美国的 Android 操作系统，与中兴相比至少华为还有一条早就筹划已久的出路，即在迫不得已的情况下采用自主操作系统。另外，华为目前已经不依赖于高通处理器，反而让世人认识到了国产最强的麒麟芯片。余承东去年曾对外公开表示，华为的麒麟芯片复杂程度超过了英特尔电脑芯片。</p><p>不过，华为海思半导体的手机麒麟芯片仅自给自足，并不对外开放供应。所以，目前中国半导体芯片仍大量依靠进口，来自普华永道(PwC)的数据显示，中国市场占据全球芯片销售额 60% 以上，而美国则是半导体芯片最大的出口国。当然，华为并非所有手机都搭载麒麟芯片，低端机也有采购来自高通和联发科的芯片。对此华为表示，致力于多供应商有助于保持业务健康发展，不应把所有鸡蛋放进一个篮子里。</p><p><a target="_blank" href="https://static.cnbetacdn.com/article/2018/0429/b024df5a91a6e86.jpg" data-index="2" data-lightbox-gallery="cbc-gallery"><img data-original="https://static.cnbetacdn.com/article/2018/0429/b024df5a91a6e86.jpg" src="https://static.cnbetacdn.com/thumb/article/2018/0429/b024df5a91a6e86.jpg"></a></p><p>最后，有消息表示，目前华为仍会继续依赖谷歌的 Android 系统，除非美国司法部的调查会有比较严重的结果。如果有那一天，相信未来华为移动设备的经营方式将会有重大转变。不过对于美国方面的调查，华为表示一点也不担心，声称公司遵守法律，而且只要继续诚实地做生意，就一定会有好结果。</p><p>话说回来，若华为失去 Android 牌照而被迫使用自主操作系统，这并不一定是坏事，因为风水轮流转，也许将这有助于打破市场垄断，甚至引发有一场新的移动革命，只不过这可能是一个相当艰难而漫长的过程。</p>                    </div>',
        'view': 0,
        'ref_type': 0,
    }).save();
    let result4 = await newsModel.build({
        'title': '电子课外积分操作流程（2017秋季学期)',
        'description': '附件: 电子课外积分操作流程（2017秋季学期）',
        'html': '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n                <div id="slideNoInsertDefault"></div>\n                <div class="dy_box ss_none">\n                    <div class="bg_top"><span></span></div>\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n                    <div class="bg_bottom"><span></span></div>\n                </div>\n                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n\n                </div>\n            </div>',
        'view': 0,
        'ref_type': 0,
    }).save();
    let result5 = await newsModel.build({
        'title': '2018中山大学大学体育指导手册',
        'description': '附件: 2018中山大学大学体育指导手册',
        'html': '',
        'view': 0,
        'ref_type': 0,
    }).save();
    let result6 = await newsModel.build({
        'title': '2018课外积分管理指南',
        'description': '附件：2018课外积分管理指南',
        'html': '',
        'view': 0,
        'ref_type': 1,
    }).save();
    let result7 = await newsModel.build({
        'title': '中山大学体育教学管理办法',
        'description': '附件：2018中山大学体育教学管理办法',
        'html': '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n                <div id="slideNoInsertDefault"></div>\n                <div class="dy_box ss_none">\n                    <div class="bg_top"><span></span></div>\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n                    <div class="bg_bottom"><span></span></div>\n                </div>\n                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n\n                </div>\n            </div>',
        'view': 0,
        'ref_type': 1,
    }).save();
    let result8 = await newsModel.build({
        'title': '中山大学“学生课外自主体育活动和实践”考核认证管理办法（暂行）',
        'description': '附件：中山大学“学生课外自主体育活动和实践”考核认证管理办法（暂行）',
        'html': '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n                <div id="slideNoInsertDefault"></div>\n                <div class="dy_box ss_none">\n                    <div class="bg_top"><span></span></div>\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n                    <div class="bg_bottom"><span></span></div>\n                </div>\n                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n\n                </div>\n            </div>',
        'view': 0,
        'ref_type': 1,
    }).save();
    let result10 = await newsModel.build({
        'title': '中山大学体育课课堂常规',
        'description': '为了保证体育教学的正常秩序和根据体育教学的有关要求，特制定如下课堂常规：1、学生必须按时到达上课地点，由体育委员集合清点人数，并向教师报告本班出勤情况。2、学生无故不上体育课以旷课论处，请事假必须有该院有关负责人签署的证明和本人的请假条。请病假必须有医院的有关病假证明，如有急病应在下次课前及时补办。缺课三分之一以上者，无体育成绩，需参加重修的学习。3、学生轻微受伤，女生例假等必须随堂见习，由教师酌情安排活动。4、学生上体育课时必须穿着运动服装和运动鞋。5、学生上课时精神要集中，讲文明、讲礼貌、讲卫生、尊敬老师，服从指挥，团结互助，认真学习，积极锻炼，敢于创新，不断进取。6、学生在上课时，要认真做好准备活动，加强保护与自我保护，尤其是在教学比赛中，动作不能粗暴，应遵守比赛规则，防止伤害事故的发生。有心脏病或有其它严重病史的学生，应主动向有关教师报告，不得隐瞒有关严重的疾病，否则一切后果自负。',
        'html': '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n                <div id="slideNoInsertDefault"></div>\n                <div class="dy_box ss_none">\n                    <div class="bg_top"><span></span></div>\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n                    <div class="bg_bottom"><span></span></div>\n                </div>\n                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n\n                </div>\n            </div>',
        'view': 0,
        'ref_type': 1,
    }).save();
    let result11 = await newsModel.build({
        'title': '中山大学体育课程指导方案',
        'description': '附件：中山大学体育课程指导方案',
        'html': '<div id="artical_real" class="js_img_share_area" data-fid="fee895866a0">\n                <div id="slideNoInsertDefault"></div>\n                <div class="dy_box ss_none">\n                    <div class="bg_top"><span></span></div>\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元 百度今日宣布旗下金融服务事业群组正式完成拆</p>\n                    <div class="bg_bottom"><span></span></div>\n                </div>\n                <div id="main_content" class="js_selection_area" data-fid="f9074e75d2f">\n                    <p>原标题：百度旗下金融业务完成正式分拆 融资超过19亿美元</p>\n<p>百度今日宣布旗下金融服务事业群组正式完成拆分融资协议签署，拆分后新公司将启用全新品牌“度小满”，实现独立运营。百度高级副总裁兼金融服务事业群组总经理朱光将出任度小满金融CEO。度小满金融本轮融资额超19亿美元，由TPG、凯雷投资集团领投。<span class="ifengLogo"><a href="http://www.ifeng.com/" target="_blank"><img src="http://p2.ifengimg.com/a/2016/0810/204c433878d5cf9size1_w16_h16.png"></a></span></p>\n\n                </div>\n            </div>',
        'view': 0,
        'ref_type': 1,
    }).save();
}


init();