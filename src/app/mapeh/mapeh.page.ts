import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapeh',
  templateUrl: './mapeh.page.html',
  styleUrls: ['./mapeh.page.scss'],
})
export class MAPEHPage  {
  Question1!: string;
  Question2!:string;
  Question3!:string;
  Question4!:string;
  Question5!:string;
  Question6!:string;
  Question7!:string;
  Question8!:string;
  Question9!:string;
  Question10!:string;
  remarks1!:string;
  remarks2!:string;
  remarks!:string;
  score:number = 0;
  SeeAnswer!: string;
  constructor() { }

  SeeAnswer1()
{
 
 if (this.Question1=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }
}

 
  SeeAnswer2()
{
 
 if (this.Question2=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer3()
{
 
 if (this.Question3=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer4()
{
 
 if (this.Question4=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer5()
{
 
 if (this.Question5=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer6()
{
 
 if (this.Question6=="b")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}
SeeAnswer7()
{
 
 if (this.Question7=="a")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}
SeeAnswer8()
{
 
 if (this.Question8=="b")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer9()
{
 
 if (this.Question9=="b")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

SeeAnswer10()
{
 
 if (this.Question10=="c")
 {
  this.remarks1="correct";
  this.remarks2="wrong";
  this.score++;
  this.score= (Number(this.score));
 
 }
 else{
  this.remarks1="wrong answer";
  this.remarks2="better luck next time";
 
 }

}

}
