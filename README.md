# vue-bmob-wilddog-demo

[![Build Status](https://www.travis-ci.org/woaer/vue-bmob-wilddog-demo.svg?branch=master)](https://www.travis-ci.org/woaer/vue-bmob-wilddog-demo)
[![](https://img.shields.io/badge/license-MIT-FF0080.svg)](https://github.com/woaer/vue-bmob-wilddog-demo/blob/master/LICENSE)

一个使用 `Vue` `Parcel` `Bmob云数据库` `Wilddog野狗实时引擎` 的构建的简易实时留言板

[在线预览](https://woaer.github.io/vue-bmob-wilddog-demo/)

## 编译运行流程

1、下载代码
```
git clone git@github.com:CarGuo/GSYGithubAppWeex.git
```

2、安装 [parcel](http://www.css88.com/doc/parcel/) - 快速，零配置的 Web 应用程序打包器
```
npm install -g parcel-bundler
```

3、安装依赖
```
npm install
```

4、项目使用到了 [Bmob 后端云](http://doc.bmob.cn/data/javascript/index.html#sdk)、[野狗通讯云](https://docs.wilddog.com/sync/Web/quickstart.html#2-安装-SDK) 服务，配置文件在 `src/config/index.js` 中。
> 目前工程中包含的配置不定期失效，如有需要，需自行配置相关的服务参数。

3、开发模式
```
npm run dev
```

3、打包
```
npm run build
```