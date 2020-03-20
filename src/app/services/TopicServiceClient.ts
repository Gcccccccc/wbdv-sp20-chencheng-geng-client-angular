import { Injectable } from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findTopicsForLesson = topicId =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/lessons/${topicId}/topics`)
      .then(response => response.json())
}
