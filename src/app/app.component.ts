import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='';
  date:string=''
  amount:number=0;
  onNameChange(event:Event){
      this.name=(event.target as HTMLInputElement).value;
  }
  onDateChange(event:Event){
    this.date=(event.target as HTMLInputElement).value;
  }
  onAmountChange(event:Event){
    this.amount=parseFloat((event.target as HTMLInputElement).value);
  }
}
