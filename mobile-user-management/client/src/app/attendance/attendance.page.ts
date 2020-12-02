import { Component, OnInit } from '@angular/core';
import {Attendance} from '../model/Attendance';
import { AttendanceService } from '../services/school/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  attendance: Attendance;

  constructor(private attendanceService: AttendanceService) { 
  }

  ngOnInit() {
    this.attendanceService.findAttendance().subscribe(data => {
      this.attendance = data;
    });
  }
  
}
