import { Injectable } from '@nestjs/common';

import { InsertResult, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Mydata } from '../entities/mydata.entity'

@Injectable()
export class MydataService {
	constructor(
		// Mydataを扱うためのリポジトリ
		@InjectRepository(Mydata)
		private readonly mydataRepository: Repository<Mydata>
	) {}

	getAll(): Promise<Mydata[]> {
		// findは非同期メソッド。mydata配列を値としてうけとるPromiseが得られる
		return this.mydataRepository.find()
	}

	addMydata(data:any):Promise<InsertResult> {
		return this.mydataRepository.insert(data)
	}
}
