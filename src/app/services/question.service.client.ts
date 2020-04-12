import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) => fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
}
