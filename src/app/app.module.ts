import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AlertComponent } from './alert/alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [AppComponent, AlertComponent, PlaceholderDirective],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
