import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatchesComponent } from './matches/matches/matches.component';
import { ViewedprofileComponent } from './matches/viewedprofile/viewedprofile.component';
import { ViewednotcontactedComponent } from './matches/viewednotcontacted/viewednotcontacted.component';
import { MembersComponent } from './matches/members/members.component';
import { ShortlistedComponent } from './matches/shortlisted/shortlisted.component';
import { SearchComponent } from './search/search/search.component';
import { ProfileComponent } from './search/profile/profile.component';
import { SearchidComponent } from './search/searchid/searchid.component';
import { FaqComponent } from './search/faq/faq.component';
import { InboxComponent } from './messages/inbox/inbox.component';
import { SentComponent } from './messages/sent/sent.component';
import { UpgradeComponent } from './messages/upgrade/upgrade.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    MatchesComponent,
    ViewedprofileComponent,
    ViewednotcontactedComponent,
    MembersComponent,
    ShortlistedComponent,
    SearchComponent,
    ProfileComponent,
    SearchidComponent,
    FaqComponent,
    InboxComponent,
    SentComponent,
    UpgradeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
