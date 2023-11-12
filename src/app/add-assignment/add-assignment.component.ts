import { Component, OnInit, /*Output, EventEmitter*/} from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { AssignmentsService } from '../shared/assignments.service';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomDevoir: string = '';
  dateRendu: Date = new Date();

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.nomDevoir);
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).subscribe(message => console.log(message));
  }

}
