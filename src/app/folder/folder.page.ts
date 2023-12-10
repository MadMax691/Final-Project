import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  txtusername!:String;
  txtpassword!:String;
  remarks1!:String;
  remarks2!:String;


  constructor() {}

  lookGrades(){
    if ( (this.txtusername=="admin") && (this.txtpassword=="admin") )
    {
    this.remarks1="Username and Password is correct";
    this.remarks2=" WELCOME ";
    }
    else if ( (this.txtusername=="pedro") )
    {
    this.remarks1="Username correct and Password is NOT corect";
    this.remarks2=" ACCESS Denied ";
    }
    else if ( (this.txtpassword=="penduko") )
    {
    this.remarks1="Username NOT correct and Password is corect";
    this.remarks2=" ACCESS Denied ";
    }
    else
    {
    this.remarks1="Login incorrect";
    this.remarks2=" ACCESS Denied ";
    }
   }
   




  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
