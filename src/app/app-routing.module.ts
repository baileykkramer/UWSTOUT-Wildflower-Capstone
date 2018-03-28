import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { HelpComponent } from './help/help.component';
import { ResourcesComponent } from './resources/resources.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossery', component: GlosseryComponent },
  { path: 'help', component: HelpComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'plant_search', component: PlantSearchComponent},
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
