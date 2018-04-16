import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { HelpComponent } from './help/help.component';
import { ResourcesComponent } from './resources/resources.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { ResultsComponent } from './results/results.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BounceComponent } from './bounce/bounce.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { Floral_Structure } from './quizzes/floral_structure/floral_structure.component';
import { Floral_Arrange } from './quizzes/floral_arrange/floral_arrange.component';
import { PlantQuizComponent } from './plant-quiz/plant-quiz.component';

const routes: Routes = [
  // { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: '', component: LoginFormComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'help', component: HelpComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'bounce', component: BounceComponent },
  { path: 'plant_search', component: PlantSearchComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'struct_quiz', component: Floral_Structure },
  { path: 'arrange_quiz', component: Floral_Arrange },
  { path: 'bounce', component: BounceComponent},
  { path: 'plant_search', component: PlantSearchComponent},
  { path: 'plant_quiz', component: PlantQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
