import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './shared/component/test/test.component';
import { AuthFormComponent } from './shared/component/auth-form/auth-form.component';
import { AccorComponent } from './shared/component/accor/accor.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthFormComponent,
    AccorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
