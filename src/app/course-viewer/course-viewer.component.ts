import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor() { }
  faTimes = faTimes;
  ngOnInit(): void {
  }

}
