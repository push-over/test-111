### Nestjs 基础

#### 初始化

```shell
$ npm i -g @nestjs/cli
$ nest new project
```

#### main.js

该main.ts包括一个异步功能，这将引导我们的应用程序

```js
import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)
  await app.listen(3000)
}

bootstrap()
```

> tips: 要创建Nest应用程序实例，我们正在使用 NestFactory。NestFactory 它是最基础的类之一，它公开了一些允许创建应用程序实例的静态方法。该create()方法返回一个实现INestApplication接口的对象，并提供一组可用的方法

#### 运行

```shell
$ npm start
```

> tips: 此命令在src/main.ts文件内定义的端口上启动HTTP服务器。应用程序运行时，打开浏览器并导航到http://localhost:3000/。你应该看到这条Hello world!消息


#### Controller 控制器

```js
import { Controller, Get, Req } from '@nestjs/common'

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request) {
    return 'This action returns all cats'
  }
}
```

> tips: 提示要使用CLI创建控制器，只需执行$ nest g controller cats命令即可

**请求方式**

```js
@Get()
@Post()
@Put()
@Delete()
@Patch()
@Options()
@Head()
@All()
```

**HTTP请求**

```js
@Request()                => req
@Response()               => res
@Next()                   => next
@Session()                => req.session
@Param(param?: string)    => req.params / req.params[param]
@Body(param?: string)     => req.body / req.body[param]
@Query(param?: string)    => req.query / req.query[param]
@Headers(param?: string)  => req.headers / req.headers[param]
```

**状态码**

```js
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```