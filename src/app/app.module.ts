import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ThreeDigitComponent } from './three-digit/three-digit.component';
import { HelpComponent } from './help/help.component';
import { QuestionGenerateComponent } from './question-generate/question-generate.component';
import { PHPService } from './php-service.service';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent,
    GlosseryComponent,
    GallaryComponent,
    ThreeDigitComponent,
    HelpComponent,
    QuestionGenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PHPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
