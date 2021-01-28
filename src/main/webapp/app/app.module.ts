import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterProject1SharedModule } from 'app/shared/shared.module';
import { JhipsterProject1CoreModule } from 'app/core/core.module';
import { JhipsterProject1AppRoutingModule } from './app-routing.module';
import { JhipsterProject1HomeModule } from './home/home.module';
import { JhipsterProject1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterProject1SharedModule,
    JhipsterProject1CoreModule,
    JhipsterProject1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterProject1EntityModule,
    JhipsterProject1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterProject1AppModule {}
