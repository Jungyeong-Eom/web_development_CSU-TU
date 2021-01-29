import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatAllTaskComponent } from './cat-all-task/cat-all-task.component';
import { CatInternalCommsAppComponent } from './cat-internal-comms-app/cat-internal-comms-app.component';
import { CatOtherComponent } from './cat-other/cat-other.component';
import { CatGeneralWorkComponent } from './cat-general-work/cat-general-work.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule} from '@angular/material/input';
import { DropdownComponent } from './dropdown/dropdown.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { StartPageComponent } from './start-page/start-page.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CatAllTaskComponent,
    CatInternalCommsAppComponent,
    CatOtherComponent,
    CatGeneralWorkComponent,
    ViewTaskComponent,
    DropdownComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,  
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule
  ],
  providers: [ 
    MatDatepickerModule,
    MatNativeDateModule  
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
