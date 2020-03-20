import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) { }
  topics = [];
  moduleId = '';
  courseId = '';
  lessonId = '';
  topicId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.topicId = params.tid;
      this.service.findTopicsForLesson(this.lessonId)
        .then(topics => this.topics = topics);
    });

  }
}
