# RN-tabbar-navigation
rn项目，tabbar和navigation一起使用切换页面
4月1日：只涉及到tabbar和navigation的页面切换，push到下一级还没有隐藏tabbar，后续会加入该功能（学习摸索中...）


下午3点：

刚提交了了，这次加了push到下一级隐藏tabbar的功能

注意：index.ios.js 文件
//require('./appPage/HomePage') //创建tabbar子试图是View
//require('./appPage/HomePageNav')//创建tabbar子试图是Navigator
require('./appPage/HomePageTabbarHidden')//创建tabbar子试图是Navigator,进入二级页面隐藏tabbar
注释不同的代码查看不同的效果
