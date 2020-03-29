import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
//import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { AdminService } from './_services/admin.service';
import { NgxSpinnerModule } from "ngx-spinner";

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
     // PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver,
      NgxSpinnerModule,
      AdminService,
    //  { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
