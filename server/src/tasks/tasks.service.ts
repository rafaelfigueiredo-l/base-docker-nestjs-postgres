import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {

  @Timeout(100)
  getHello(){
    console.log("teste2");
  }

}
