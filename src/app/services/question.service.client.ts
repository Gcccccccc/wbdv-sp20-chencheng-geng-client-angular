import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) => fetch(`https://chencheng-sp20-node-server.herokuapp.com/api/quizzes/${qid}/questions`)
}
