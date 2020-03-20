import { Component, OnInit } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }
  faTimes = faTimes;
  course = {
    title: 'title'
  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params.cid;
      this.service.findCourseById(courseId)
        .then(course => this.course = course);
    });
  }

}
