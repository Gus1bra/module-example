import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersideComponent } from './components/pages/otherside/otherside.component';
import { FaqComponent } from './components/pages/faq/faq.component';

const routes: Routes = [
  { path: 'otherside', component: OthersideComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
