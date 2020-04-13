import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) => fetch(`https://a9-chencheng-server.herokuapp.com/api/quizzes/${qid}/questions`)
}
