import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  assignments=[
    {
      title:'Assignment for final Examination',
      date: '17 aug 2019',
    },
    {
      title:'Assignment for final Examination',
      date: '17 aug 2019',
    },
    {
      title:'Assignment for final Examination',
      date: '17 aug 2019',
    },
    {
      title:'Assignment for final Examination',
      date: '17 aug 2019',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
