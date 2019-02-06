import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './pages/faq/faq.component';
import { OthersideComponent } from './pages/otherside/otherside.component';
import { ComponentsService } from './components.service';

@NgModule({
  declarations: [
    FaqComponent,
    OthersideComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ComponentsService,
  ],
})
export class ComponentsModule { }
