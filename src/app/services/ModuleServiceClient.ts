import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001348430/courses/${courseId}/modules`)
      .then(response => response.json())
}
