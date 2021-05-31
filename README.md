# vue-bmob-wilddog-demo

[![Build Status](https://www.travis-ci.org/woaer/seibo.svg?branch=master)](https://www.travis-ci.org/woaer/seibo)
[![](https://img.shields.io/badge/license-MIT-FF0080.svg)](https://github.com/woaer/seibo/blob/master/LICENSE)

> Wilddog野狗实时引擎停止服务，本项目结束维护。

一个使用 `Vue` `Parcel` `Bmob云数据库` `Wilddog野狗实时引擎` 的构建的简易实时留言板

[在线预览](https://woaer.github.io/seibo/)

## 编译运行流程

1、下载代码、安装依赖。打包工具使用了 [parcel - 快速，零配置的 Web 应用程序打包器](http://www.css88.com/doc/parcel/)
```
git clone https://github.com/woaer/seibo.git
cd seibo
npm install -g parcel-bundler
npm install
```

2、项目使用到了 [Bmob 后端云](http://doc.bmob.cn/data/javascript/index.html#sdk)、[野狗通讯云](https://docs.wilddog.com/sync/Web/quickstart.html#2-安装-SDK) 服务，配置文件在 `src/config/index.js` 中。
> 目前工程中包含的配置不定期失效，如有需要，需自行配置相关的服务参数。

3、开发模式
```
npm run dev
```

4、打包。会发布到 `public` 目录下
```
npm run build
```
