import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/api/services';
import { ClassListResponseDTO } from 'src/app/api/models';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.sass']
})
export class ClassListComponent implements OnInit {
  classList: ClassListResponseDTO[];

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    const params: ClassesService.ClassesListParams= {
      startPosition: null,
      maxResult: null
    }
    this.classesService.classesList(params).subscribe(
      result => {
        this.classList = result;
      }
    );
  }

}
