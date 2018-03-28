import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { ThreeDigitComponent } from './three-digit/three-digit.component';
import { HelpComponent } from './help/help.component';
import { QuestionGenerateComponent } from './question-generate/question-generate.component';
import { PHPService } from './php-service.service';
import { Http, HttpModule } from '@angular/http';
import { ResourcesComponent } from './resources/resources.component';
import { ResultsComponent } from './results/results.component';
import { ResultsService } from './results/results.service';
import { CurrentResults } from './current_results/current_results.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent,
    GlosseryComponent,
    ThreeDigitComponent,
    HelpComponent,
    QuestionGenerateComponent,
    ResourcesComponent,
    ResultsComponent,
    CurrentResults,
    LoginFormComponent
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
