import { Component, /*Input,*/ OnInit } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getAssignment();
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((message) => console.log(message));

    this.assignmentTransmis = null;
  }

  getAssignment() {
    //const id = +this.route.snapshot.params.id;
    //this.assignmentsService.getAssignments(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }
  

  /*@Input()*/ assignmentTransmis: Assignment;

  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute) { }

}
