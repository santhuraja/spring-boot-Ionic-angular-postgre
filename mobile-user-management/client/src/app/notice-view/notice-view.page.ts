import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-view',
  templateUrl: './notice-view.page.html',
  styleUrls: ['./notice-view.page.scss'],
})
export class NoticeViewPage implements OnInit {
  notice: any;
  constructor(
    private navParam: ActivatedRoute
  ) { }

  ngOnInit() {
    this.navParam.queryParams.subscribe(param=>{
      
      this.notice = JSON.parse(param.notice)
      console.log(this.notice);
    })
  } 

}
