import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import {MenuController} from '@ionic/angular';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-pastry',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
  segmentTab: any;
  userDetails: KeycloakProfile;
  
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "time": string; } | { "name": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router,private keycloakService: KeycloakService, private menu: MenuController) {
    this.segmentTab = 'chat';
    
    this.chatData = [{
      "name": 'Jovenica Alba',
      "image": '../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": '12:17'
    }, {
      "name": 'Oliver',
      "image": '../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '12:17'
    }, {
      "name": 'George',
      "image": '../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '2',
      "time": 'Yesterday'
    }, {
      "name": 'Harry',
      "image": '../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Sunday'
    }, {
      "name": 'Jack',
      "image": '../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": '11:15'
    }, {
      "name": 'Jacob',
      "image": '../../assets/chat/chat6.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '1',
      "time": 'Yesterday'
    }, {
      "name": 'Noah',
      "image": '../../assets/chat/chat7.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Monday'
    }, {
      "name": 'Charlie',
      "image": '../../assets/chat/chat8.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "count": '6',
      "time": '07:00'
    }, {
      "name": 'Logan',
      "image": '../../assets/chat/chat1.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Yesterday'
    }, {
      "name": 'Harrison',
      "image": '../../assets/chat/chat2.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": 'Yesterday'
    }, {
      "name": 'Sebastian',
      "image": '../../assets/chat/chat3.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      "time": 'Yesterday'
    }, {
      "name": 'Zachary',
      "image": '../../assets/chat/chat4.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": 'Today'
    }, {
      "name": 'Elijah',
      "image": '../../assets/chat/chat5.jpg',
      "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      "time": '18:25'
    }
    ]

    
  }

  async ngOnInit() {
    this.menu.enable(true);
    console.log("keyserv " + this.keycloakService)
    if (await this.keycloakService.isLoggedIn()) {
      console.log("before " + this.userDetails)
      this.userDetails = await this.keycloakService.loadUserProfile();
      console.log("after " + this.userDetails)
      console.log("after " + this.userDetails.username)
      //this.isAdmin = this.authService.getRoles('admin');
      //this.isEmployee = this.authService.getRoles('employee');
    }
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  goforChat(chat) {
   // this.route.navigate(['/bubble', chat]);

    let navParam: NavigationExtras = {
      queryParams: {
        image: JSON.stringify(chat.image)
      }
    }
    this.route.navigate(['/bubble'], navParam);
  }
  

}
