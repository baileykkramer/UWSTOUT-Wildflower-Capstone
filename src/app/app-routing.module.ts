import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { HelpComponent } from './help/help.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResultsComponent } from './results/results.component';
import { CurrentResults } from './current_results/current_results.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: '', component: LoginFormComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossery', component: GlosseryComponent },
  { path: 'help', component: HelpComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'results', component: ResultsComponent}, 
  { path: 'current_results', component: CurrentResults}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
