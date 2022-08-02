import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  public message$: BehaviorSubject<{i:number,j:number,userId:string| null, value:string}> = new BehaviorSubject({} as {i:number,j:number,userId:string| null, value:string});
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(data: {i:number,j:number,userId:string| null}) {
    this.socket.emit('message', data);
  }

  public getNewMessage = () => {
    this.socket.on('message', (data: {i:number,j:number,userId:string| null, value:string}) =>{
      this.message$.next(data);
    });
    
    return this.message$.asObservable();
  };
}