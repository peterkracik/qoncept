import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnalysisGridModule } from './analysis-grid/analysis-grid.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AnalysisGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
