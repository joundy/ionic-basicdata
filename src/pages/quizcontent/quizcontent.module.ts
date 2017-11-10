import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizcontentPage } from './quizcontent';

@NgModule({
  declarations: [
    QuizcontentPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizcontentPage),
  ],
})
export class QuizcontentPageModule {}
