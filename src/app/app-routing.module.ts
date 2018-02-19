import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { GlosseryComponent } from './glossery/glossery.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/classification', pathMatch: 'full' },
  { path: 'classification', component: ClassificationComponent },
  { path: 'glossery', component: GlosseryComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
