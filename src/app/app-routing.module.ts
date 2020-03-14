import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { ComparesectorsComponent } from './user/comparesectors/comparesectors.component';
import { IposComponent } from './user/ipos/ipos.component';
import { OtherComponent } from './user/other/other.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
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
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';




const routes: Routes = [

  {path:'sectorlist',component:SectorlistComponent},
  {path:'sector',component:SectorComponent},

  {path:'createipo',component:CreateipoComponent},
  {path:'stockprice',component:StockpriceComponent},
  {path:'createstockprice',component:CreatestockpriceComponent},
  {path:'updateipodetails',component:UpdateipodetailsComponent},

  {path:'login',component:LoginComponent},
  {path:'adminnavbar',component:AdminnavbarComponent},
  {path:'usernavbar',component:UsernavbarComponent},

  {path:'userlist',component:UserlistComponent},
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:HomeComponent
  }
,

  {
    path:'home',
    component:HomeComponent
  }
,
{
  path:'registernewstock',
  component:RegisternewstockComponent
},
  {
    path:'admin',
    component:AdminComponent
  }
,

{
  path:'createcompany',
  component:CreatecompanyComponent
},
  {
    path:'user',
    component:UserComponent
  }
,
  {
    path:'importdata',
    component:ImportdataComponent
  }
,

  {
    path:'logout',
    component:LogoutComponent
  }
,

  {
    path:'managecompany',
    component:ManagecompanyComponent
  }
,
  {
    path:'manageexchange',
    component:ManageexchangeComponent
  }
,
{
  path:'comparecompany',
  component:ComparecompanyComponent
}
,

  {
    path:'comparesectors',
    component:ComparesectorsComponent
  }
,



  {
    path:'ipos',
    component:IposComponent
  }
,

  {
    path:'other',
    component:OtherComponent
  },
  

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
