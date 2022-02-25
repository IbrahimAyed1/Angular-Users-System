import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotfoundComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [FooterComponent, NavbarComponent, NotfoundComponent],
})
export class SharedModule {}
