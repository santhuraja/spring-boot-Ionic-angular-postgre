import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  months = [
    {
      name: '#',
      date: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    {
      name: 'Jan',
      date: ['N/A', 'W', 'P', 'A', 'N/A', 'P', 'P', 'P', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    },
    {
      name: 'Feb',
      date: ['N/A', 'W', 'P', 'A', 'N/A', 'P', 'P', 'P', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A']
    },
    {
      name: 'Mar',
      date: ['N/A', 'W', 'N/A', 'P', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    },
    {
      name: 'Apr',
      date: ['N/A', 'P', 'W', 'N/A', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W']
    },
    {
      name: 'May',
      date: ['N/A', 'W', 'N/A', 'P', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    },
    {
      name: 'Jun',
      date: ['W', 'N/A', 'P', 'A', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W']
    },
    {
      name: 'July',
      date: ['P', 'N/A', 'P', 'N/A', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    },
    {
      name: 'Aug',
      date: ['W', 'A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W']
    },
    {
      name: 'Sep',
      date: ['N/A', 'N/A', 'N/A', 'P', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    },
    {
      name: 'Nov',
      date: ['N/A', 'P', 'N/A', 'W', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W']
    },
    {
      name: 'Dec',
      date: ['P', 'A', 'N/A', 'W', 'N/A', 'N/A', 'N/A', 'W', 'A', 'A', 'N/A', 'N/A', 'P', 'P', 'P', 'A', 'W', 'W', 'P', 'N/A', 'N/A', 'N/A', 'P', 'A', 'W', 'A', 'P', 'N/A', 'P', 'W', 'A']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
