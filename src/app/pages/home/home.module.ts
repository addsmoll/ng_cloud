import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { SearchPanelsComponent } from './search-panels/search-panels.component';




export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    PipesModule,

    // SearchPanelsComponent,
    RouterModule.forChild(routes)


    ],

  declarations: [
    NewsComponent,
    HomeComponent,
    SearchPanelsComponent
],

  exports: [
    HomeComponent,
    NewsComponent,
    SearchPanelsComponent
  ]
})
export class HomeModule { }

