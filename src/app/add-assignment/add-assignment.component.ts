import { Component, OnInit, /*Output, EventEmitter*/ } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();

  newAssignment: Assignment;
  nomDevoir: string = '';
  dateRendu: Date = new Date();
  assignments: any;

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(event) {
    event.preventDefault();
    const newAssignment = new Assignment();

    newAssignment.id = this.assignmentsService.getNewId();
    newAssignment.nom = this.nomDevoir;
    newAssignment.rendu = false;

    if (this.dateRendu)
      newAssignment.dateDeRendu = this.dateRendu;

    //this.nouvelAssignment.emit(newAssignment);
    console.log(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).subscribe(message => console.log(message));

    this.router.navigate(['home']);
  }

}
