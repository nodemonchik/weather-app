import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggleMenu() {
    console.log('Toggle menu');
  }

  modeToggleSwitch() {
    console.log('Mode Toggle Switch');
  }

}
