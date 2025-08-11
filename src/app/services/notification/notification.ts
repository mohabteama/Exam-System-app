import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

  public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5023/hub/notifications')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('✅ SignalR connection started'))
      .catch((err) => console.log('❌ Error while starting connection: ' + err));
      this.hubConnection.onclose(error => {
  console.error('SignalR connection closed:', error);
});
  }

  public onScoreReceived(callback: (data: any) => void): void {
    this.hubConnection.on('ReceiveScore', callback);
  }
}
