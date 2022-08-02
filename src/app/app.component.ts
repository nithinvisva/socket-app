import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'socker-app';
  ticktak=[0,1,2];
  tictactoeList:string[][]=[['','',''],['','',''],['','','']]
  constructor(private chatService: ChatService){
    
  }
  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: {i:number,j:number,userId:string| null, value:string}) => {
      this.tictactoeList[message.i][message.j] = message.value
    })
  }

  sendData(data:{i:number,j:number,userId:string| null, value:string}) {
    this.chatService.sendMessage(data);
  }
  handleSquareClick(i: number,j:number){
    const data ={
      i: i,
      j: j,
      userId: '',
      value: ''
    }
    this.sendData(data);
  }
}
