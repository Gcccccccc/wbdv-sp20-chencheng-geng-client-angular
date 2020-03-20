import {Injectable} from '@angular/core';


@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001348430/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001348430/courses/${courseId}`)
      .then(response => response.json())
}
