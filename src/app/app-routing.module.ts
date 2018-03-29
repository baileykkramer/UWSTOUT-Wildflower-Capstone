import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { HelpComponent } from './help/help.component';
import { ResourcesComponent } from './resources/resources.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { ResultsComponent } from './results/results.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BounceComponent } from './bounce/bounce.component';

const routes: Routes = [
  // { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: '', component: LoginFormComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossery', component: GlosseryComponent },
  { path: 'help', component: HelpComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'bounce', component: BounceComponent},
  { path: 'plant_search', component: PlantSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 