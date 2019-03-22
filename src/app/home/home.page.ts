import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser,) {

  }

  ngOnInit(){

    const browser = this.iab.create('http://live-7bits.pantheonsite.io','_self',{location:'no', toolbar:'no'});

}

 

}
