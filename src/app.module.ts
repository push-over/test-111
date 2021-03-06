import {  CacheModule, Module, HttpModule } from '@nestjs/common'

import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from '@nestjs/schedule'

import {
	CacheService,
	GraphqlService,
	TypeOrmService
} from './config'

import { DateScalar } from './config/graphql/scalars/date.scalar'
import { UploadScalar } from './config/graphql/scalars/upload.scalar'

// import * as Resolvers from './resolvers'

@Module({
  imports: [
    ScheduleModule.forRoot(),
    GraphQLModule.forRootAsync({
			useClass: GraphqlService
    }),
    TypeOrmModule.forRootAsync({
			useClass: TypeOrmService
    }),
    CacheModule.registerAsync({
			useClass: CacheService
    }),
    HttpModule
  ],
  providers: [
    DateScalar,
    UploadScalar,
    // ...Object.values(Resolvers)
  ]
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
