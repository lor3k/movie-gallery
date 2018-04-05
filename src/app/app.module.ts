import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';

import { MovieService } from './movie.service'

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'auto' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
