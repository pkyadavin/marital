import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'viewedprofile', component: ViewedprofileComponent },
  { path: 'viewednotcontacted', component: ViewednotcontactedComponent },
  { path: 'members', component: MembersComponent },
  { path: 'shortlisted', component: ShortlistedComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'searchid', component: SearchidComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'sent', component: SentComponent },
  { path: 'upgrade', component: UpgradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
