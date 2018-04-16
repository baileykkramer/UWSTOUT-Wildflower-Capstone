import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClassificationComponent } from './classification/classification.component';
import { ThreeDigitComponent } from './three-digit/three-digit.component';
import { HelpComponent } from './help/help.component';
import { QuestionGenerateComponent } from './question-generate/question-generate.component';
import { PHPService } from './php-service.service';
import { Http, HttpModule } from '@angular/http';
import { ResourcesComponent } from './resources/resources.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { ResultsComponent } from './results/results.component';
import { ResultsService } from './results/results.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { BounceComponent } from './bounce/bounce.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { Floral_Structure } from './quizzes/floral_structure/floral_structure.component';
import { Floral_Arrange } from './quizzes/floral_arrange/floral_arrange.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent,
    ThreeDigitComponent,
    HelpComponent,
    QuestionGenerateComponent,
    ResourcesComponent,
    PlantSearchComponent,
    ResultsComponent,
    LoginFormComponent,
    BounceComponent,
    QuizzesComponent,
    GlossaryComponent,
    Floral_Structure,
    Floral_Arrange,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PHPService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
