import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { getMetadataArgsStorage } from 'typeorm'

import config from '../../config.orm'

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options = {
      ...config,
      type: 'mysql',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true,
      autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepConnectionAlive: true,
      logging: true,
    }
    return options
  }
}
