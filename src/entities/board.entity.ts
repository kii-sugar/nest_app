import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Mydata } from './mydata.entity'

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    message: string
    
    @Column('datetime')
    date: Date

    // ふたつのエンティティの関係を示すデコレータ
    // mydata = id(1とか)を指定すれば、そのIDのmydataレコードが割り当てられるようになる
    @ManyToOne(type => Mydata, mydata => mydata.boards, {
        // オプション eager：Boardインスタンスを取得する際、必ずMydataも取得されるようになる
        eager: true
    })
    mydata: Mydata
}