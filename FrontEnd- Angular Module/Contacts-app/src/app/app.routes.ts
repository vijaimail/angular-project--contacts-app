import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent,
    pathMatch:'full'
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'contacts',
    component:ContactsComponent
},
{
    path:'about',
    component:AboutComponent
}


];
