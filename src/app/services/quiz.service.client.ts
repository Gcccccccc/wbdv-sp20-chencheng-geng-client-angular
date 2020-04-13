import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () => fetch('https://a9-chencheng-server.herokuapp.com/api/quizzes')
    .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://a9-chencheng-server.herokuapp.com/api/quizzes/${qid}`).then(response => response.json())
}
