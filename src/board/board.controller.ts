import { Controller, Render, Get, Post, Redirect, Body, Req, Res, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { Any,InsertResult } from 'typeorm';
import { BoardService } from 'src/board/board.service';
import { MydataService } from 'src/mydata/mydata.service';
import { Mydata } from '../entities/mydata.entity';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService, private readonly mydataService: MydataService) {}

    @Get('/')
    async index(
        @Session() session: Record<string, any>, // セッションを管理するSessionオブジェクトを引数にわたすためのもの。
        @Res() response:Response                 // サーバーからクライアントへの返信を管理するResponseオブジェクトを渡すためのもの
        ): Promise<any> {

            // 未ログインの場合はログイン画面にリダイレクトする
            if (session.login === undefined) {
                return response.redirect('/board/login')
            }

            // ログイン済みの場合はメッセージボード画面の表示
            console.log(await this.boardService.getAll())
            return response.render(
                'board/index', 
                {
                    msg: 'please send a message',
                    login: session.login,
                    data: await this.boardService.getAll()
                }
            )
    }

    // メッセージ追加
    @Post('/')
    @Redirect('/board/')
    async send(@Body() form:any):Promise<void> {
        form.date = new Date()
        this.boardService.addBoard(form)
    }

    @Get('/login')
    @Render('board/login')
    login(@Session() session: Record<string, any>):any {
        return {
            msg:'your name & password:',
            login: session.login
        }
    }

    @Post('/login')
    async sign(
        @Body() form:any,
        @Session() session: Record<string, any>,
        @Res() response: Response
        ): Promise<void> {
            const mydata: Mydata = await this.mydataService.getByName(form.name)
            if (mydata != undefined && form.pass === mydata.pass) {
                session.login = mydata // ログインしたときにsession.loginに保管
                return response.redirect('/board')
            }
            return response.redirect('/board/login')
        }
}
