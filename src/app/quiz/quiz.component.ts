import { Component, OnInit } from '@angular/core';
import { QuestionServiceClient } from '../services/question.service.client';
import { ActivatedRoute } from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuestionServiceClient,
              private service: QuizServiceClient,
              private route: ActivatedRoute) { }
  questions = []
  quizId = ''
  quizTitle = ''
  ngOnInit(): void {
  this.route.params.subscribe(ps => {
    this.quizId = ps.quizId;
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quizTitle = quiz.title);
    this.svc.findQuestionsForQuiz(this.quizId)
      .then(response => response.json())
      .then(questions => this.questions = questions);
});
}
}
