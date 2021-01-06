import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WebappgwSharedModule } from 'app/shared/shared.module';
import { WebappgwCoreModule } from 'app/core/core.module';
import { WebappgwAppRoutingModule } from './app-routing.module';
import { WebappgwHomeModule } from './home/home.module';
import { WebappgwEntityModule } from './entities/entity.module';
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
    WebappgwSharedModule,
    WebappgwCoreModule,
    WebappgwHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WebappgwEntityModule,
    WebappgwAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class WebappgwAppModule {}
