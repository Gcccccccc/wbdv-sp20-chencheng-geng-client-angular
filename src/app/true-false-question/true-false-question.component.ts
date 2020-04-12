import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  constructor() { }
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;
  @Input()
  question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''}
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () => {
    this.grading = true;
    this.answerChange.emit(this.answer);
  }
  ngOnInit(): void {
  }
}
