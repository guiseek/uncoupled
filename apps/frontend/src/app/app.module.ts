import {BrowserModule} from '@angular/platform-browser'
import {LOCALE_ID, NgModule} from '@angular/core'
import pt from '@angular/common/locales/pt'
import ptBR from '@angular/common/locales/extra/br'
import {registerLocaleData} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {UiLayoutModule} from '@uncoupled/shared/ui-layout'
import {AppComponent} from './app.component'
import {appRoutes} from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

registerLocaleData(pt, 'pt-BR', ptBR)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UiLayoutModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
