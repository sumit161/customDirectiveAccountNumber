import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDirective } from './shared/directive/basicCss.directive';
import { AdvancedCssDirective } from './shared/directive/advanced-css.directive';
import { ApplycssDirective } from './shared/directive/applycss.directive';
import { OverOutDirective } from './shared/directive/over-out.directive';
import { FormDirective } from './shared/directive/form.directive';
import { AppMyTooltipDirective } from './shared/directive/app-my-tooltip.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    AdvancedCssDirective,
    ApplycssDirective,
    OverOutDirective,
    FormDirective,
    AppMyTooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
