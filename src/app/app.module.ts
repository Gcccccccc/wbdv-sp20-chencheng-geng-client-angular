import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonServiceClient } from './services/LessonServiceClient';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/TopicServiceClient';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuestionServiceClient } from './services/question.service.client';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    HomePageComponent,
    TopicPillsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
