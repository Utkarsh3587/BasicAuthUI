import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CropComponent } from './crop/crop.component';
import { CropDetailComponent } from './crop-detail/crop-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'crops', component: CropComponent },
  { path: 'crops/:id', component: CropDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
