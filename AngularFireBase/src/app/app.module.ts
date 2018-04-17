import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { AddTasksComponent } from './component/add-tasks/add-tasks.component';
import { AngularFireModule} from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment'
import {TaskService} from './services/task.service';
import { TareaComponent } from './tarea/tarea.component';
import { AddTareasComponent } from './components/add-tareas/add-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTasksComponent,
    TareaComponent,
    AddTareasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'angular-fs')
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
