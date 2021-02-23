import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  player = true;
  nama = "";
  menang : Boolean = false;
  koor1 = 0;
  koor2 = 0;
  table = true;

  satu = [
    "*","*","*","*","*"
  ];
  dua = [
    "*","*","*","*","*"
  ];
  tiga = [
    "*","*","*","*","*"
  ];
  empat = [
    "*","*","*","*","*"
  ];
  lima = [
    "*","*","*","*","*"
  ];

  simbol = "";

  check(){
    if(this.player){
      this.simbol = "1";
    }else{
      this.simbol = "0";
    }

    if (this.koor1 == 1){
      this.satu[this.koor2 - 1] = this.simbol
    }
    else if (this.koor1 == 2){
      this.dua[this.koor2 - 1] = this.simbol
    }
    else if (this.koor1 == 3){
      this.tiga[this.koor2 - 1] = this.simbol
    }
    else if (this.koor1 == 4){
      this.empat[this.koor2 - 1] = this.simbol
    }
    else if (this.koor1 == 5){
      this.lima[this.koor2 - 1] = this.simbol
    }

    if(this.player){
      this.player = false;
    }else{
      this.player = true;
    }
    if(this.table){
      this.table = false;
    }else{
      this.table = true;
    }



    
  }

}
