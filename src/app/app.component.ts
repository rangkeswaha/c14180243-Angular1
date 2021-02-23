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
  checkwin1 = 0;
  checkwin0 = 0;
  p1 : Boolean = false;
  p0 : Boolean = false;

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

    //horizontal
    //satu
    for(var i = 0; i < 5; i++){
      if (this.satu[i] == "1"){
        this.checkwin1 += 1;
      }
      if (this.satu[i] == "0"){
        this.checkwin0 += 1;
      }
      if (this.checkwin1 == 4){
        this.menang = true;
        this.p1 = true;
        break;
      }
      if (this.checkwin0 == 4){
        this.menang = true;
        this.p0 = true;
        break;
      }
    }
    //dua
    for(var i = 0; i < 5; i++){
      if (this.dua[i] == "1"){
        this.checkwin1 += 1;
      }
      if (this.dua[i] == "0"){
        this.checkwin0 += 1;
      }
      if (this.checkwin1 == 4){
        this.menang = true;
        this.p1 = true;
        break;
      }
      if (this.checkwin0 == 4){
        this.menang = true;
        this.p0 = true;
        break;
      }
    }
    //tiga
    for(var i = 0; i < 5; i++){
      if (this.tiga[i] == "1"){
        this.checkwin1 += 1;
      }
      if (this.tiga[i] == "0"){
        this.checkwin0 += 1;
      }
      if (this.checkwin1 == 4){
        this.menang = true;
        this.p1 = true;
        break;
      }
      if (this.checkwin0 == 4){
        this.menang = true;
        this.p0 = true;
        break;
      }
    }
    //empat
    for(var i = 0; i < 5; i++){
      if (this.empat[i] == "1"){
        this.checkwin1 += 1;
      }
      if (this.empat[i] == "0"){
        this.checkwin0 += 1;
      }
      if (this.checkwin1 == 4){
        this.menang = true;
        this.p1 = true;
        break;
      }
      if (this.checkwin0 == 4){
        this.menang = true;
        this.p0 = true;
        break;
      }
    }
    //lima
    for(var i = 0; i < 5; i++){
      if (this.lima[i] == "1"){
        this.checkwin1 += 1;
      }
      if (this.lima[i] == "0"){
        this.checkwin0 += 1;
      }
      if (this.checkwin1 == 4){
        this.menang = true;
        this.p1 = true;
        break;
      }
      if (this.checkwin0 == 4){
        this.menang = true;
        this.p0 = true;
        break;
      }
    }
    this.checkwin1 = 0;
    this.checkwin0 = 0;

    if(this.p1){
      this.nama = "1";
    }
    if(this.p0){
      this.nama = "0";
    }

    //vertical
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 5; j++){
        
      }
    }

  }

}
