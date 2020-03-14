import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { ComparesectorsComponent } from './user/comparesectors/comparesectors.component';
import { IposComponent } from './user/ipos/ipos.component';
import { OtherComponent } from './user/other/other.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { ComparecompanyComponent } from './user/comparecompany/comparecompany.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { RegisternewstockComponent } from './admin/registernewstock/registernewstock.component';
import { UpdateipodetailsComponent } from './admin/updateipodetails/updateipodetails.component';
import { CreateipoComponent } from './admin/createipo/createipo.component';
import { StockpriceComponent } from './admin/stockprice/stockprice.component';
import { CreatestockpriceComponent } from './admin/stockprice/createstockprice/createstockprice.component';
import { SectorlistComponent } from './admin/sectorlist/sectorlist.component';
import { SectorComponent } from './admin/sectorlist/sector/sector.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsServiceService } from 'src/app/highcharts-service.service';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent, 
    AdminComponent,
    UserComponent,
    ImportdataComponent,
    LogoutComponent,
    ManagecompanyComponent,
    ComparesectorsComponent,
    IposComponent,
    OtherComponent,
    ManageexchangeComponent,
    UserlistComponent,
    ComparecompanyComponent,
    CreatecompanyComponent,
    ManageexchangeComponent,
    RegisternewstockComponent,
    UpdateipodetailsComponent,
    CreateipoComponent,
    StockpriceComponent,
    CreatestockpriceComponent,
    SectorlistComponent,
    SectorComponent,
    AdminnavbarComponent,
    UsernavbarComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
    ]),
    RouterModule.forRoot([
      {
        path:'signup',
        component:SignupComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'admin',
        component:AdminComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'user',
        component:UserComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'importdata',
        component:ImportdataComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'logout',
        component:LogoutComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'managecompany',
        component:ManagecompanyComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'manageexchange',
        component:ManageexchangeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'comparesectors',
        component:ComparesectorsComponent
      }
    ]),
  
    RouterModule.forRoot([
      {
        path:'ipos',
        component:IposComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path:'other',
        component:OtherComponent
      }
    ])
  ],
  providers: [HighchartsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
