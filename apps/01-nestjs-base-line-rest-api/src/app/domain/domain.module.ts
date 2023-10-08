import { Module } from "@nestjs/common";
import { DBModule } from '@dev/database';

Module({
    imports:[
        DBModule.forRoot({

        })
    ],
    providers:[],
    controllers:[],
})

export class DominModule{

}