import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignments.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
 
@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments:Assignment [] = [
    {
      id:1,
      nom:"TP1 WC à rendre",
      dateDeRendu: new Date('2023-11-17'),
      rendu:true
    },
    {
      id:2,
      nom:"TP2 WC à rendre",
      dateDeRendu: new Date('2023-12-24'),
      rendu:false
    },
    {
      id:3,
      nom:"Mini projet Angular à rendre",
      dateDeRendu: new Date('2024-05-07'),
      rendu:false
    }
  ];

  constructor(private loggingService:LoggingService) { }

  getAssignments(id:number):Observable<Assignment|undefined> {
    const a:Assignment|undefined = this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    
    return of('Assignment ajouté');
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    return of("Assignment service: assignment modifié !")
  }

  deleteAssignment(assignment:Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);

    return of("Assignment service: assignment supprimé !")
  }
}
