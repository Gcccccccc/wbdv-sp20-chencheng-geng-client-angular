import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) { }
  modules = [];
  moduleId = '';
  courseId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.service.findModulesForCourse(this.courseId)
        .then(modules => this.modules = modules);
    });

  }
}
