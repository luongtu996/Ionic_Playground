import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeCompletePage } from './practice-complete.page';
import {SharedModule} from "../../shared.module";

const routes: Routes = [
  {
    path: '',
    component: PracticeCompletePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PracticeCompletePage]
})
export class PracticeCompletePageModule {}
