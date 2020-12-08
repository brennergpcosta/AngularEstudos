import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BasicHighlighDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

import { AppComponent } from "./app.component";
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlighDirective, BetterHighlightDirective, UnlessDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
