import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Science', url: '/folder/science/science', icon: 'telescope' },
    { title: 'Math', url: '/folder/math/math', icon: 'shapes' },
    { title: 'English', url: '/folder/english/english', icon: 'document-text' },
    { title: 'MAPEH', url: '/folder/mapeh/mapeh', icon: 'accessibility' },
    { title: 'Filipino', url: '/folder/filipino/filipino', icon: 'library' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
