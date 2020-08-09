import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RoutineService } from '../services/school/routine.service';
import { Routine } from '../model/routine';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {

  routines: Array<Routine>;

  constructor(
    private routineService: RoutineService,
    private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(true);
    this.findRoutinesByClass(4);
  }

  findRoutinesByClass(classGrade : number) {
    this.routineService.findRoutinesByClass(classGrade).subscribe(data => {
      this.routines = data;
    });
  }

}
