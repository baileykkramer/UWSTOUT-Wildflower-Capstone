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
import { Floral_structure } from './quizzes/floral_structure.component';

const routes: Routes = [
  // { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: '', component: LoginFormComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'help', component: HelpComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'bounce', component: BounceComponent},
  { path: 'plant_search', component: PlantSearchComponent},
  { path: 'floral_structure', component: Floral_structure},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
