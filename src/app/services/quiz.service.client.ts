import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () => fetch('https://chencheng-sp20-node-server.herokuapp.com/api/quizzes')
    .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://chencheng-sp20-node-server.herokuapp.com/api/quizzes/${qid}`).then(response => response.json())
}
