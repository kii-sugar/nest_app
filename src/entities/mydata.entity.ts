import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// エンティティにつけるデコレーター
@Entity()
export class Mydata {
	// プライマリキー
  @PrimaryGeneratedColumn()
	id: number

	@Column({ length: 20})
	name: string
	
	@Column({ length: 100})
	pass: string

	@Column({ length: 100, nullable: true})
	mail: string

	@Column()
	age: number
}