import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { SearchPanelsComponent } from './search-panels/search-panels.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { CustomFormsModule } from 'ng2-validation';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeafletMapsComponent } from '../maps/leaflet-maps/leaflet-maps.component'


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
    RouterModule.forChild(routes),

// formscontrol include-----
    ReactiveFormsModule,
    MultiselectDropdownModule,
    CustomFormsModule,
    CKEditorModule,
    NgbModule

    ],

  declarations: [
    NewsComponent,
    HomeComponent,
    SearchPanelsComponent,
    LeafletMapsComponent
  ],

  exports: [
    HomeComponent,
    NewsComponent,
    SearchPanelsComponent
  ]
})
export class HomeModule { }

