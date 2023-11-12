import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit{
  titre = "Mon application sur les Assignments !"
  ajoutActive = false;
  formVisible = false;
  assignmentSelectionne!:Assignment;
  assignments!: Assignment[];

  assignmentClique(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    /*setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);*/
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  onAddAssignmentBtnClick() {
    //this.formVisible = true;
  }
/*
  onNouvelAssignment(event:Assignment) {
    //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
    this.formVisible = false;

  }
*/
  
}
