import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './tictactoe/main.component';
import { StartComponent } from './start.component';
import { FieldComponent } from './tictactoe/field.component';
import { MenuComponent } from './tictactoe/menu.component';
import { CellComponent } from './tictactoe/cell.component';
import { HighlightDirective } from './tictactoe/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    MenuComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FieldComponent,
    CellComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
