import { Injectable } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
		@InjectRepository(Board)
		private readonly boardRepository: Repository<Board>
	) {}

	getAll():Promise<Board[]> {
		return this.boardRepository.find({
			order: {
				date: "DESC"
			},
			take: 20 // 最大数
		})
	}

	getById(id:number):Promise<Board> {
		return this.boardRepository.findOne(id)
	}

	addBoard(form:any):Promise<InsertResult> {
		return this.boardRepository.insert(form)
	}
}
