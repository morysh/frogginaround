import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.module.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastContainerComponent } from './shared/component/toast-container/toast-container.component';
import { ToastComponent } from './shared/component/toast-container/toast/toast.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent, ToastContainerComponent, ToastComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
