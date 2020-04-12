import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  constructor() { }
  grading = false
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
    this.answerChange.emit(this.answer)
  }
  ngOnInit(): void {
  }
  }

