// import { NgModule } from '@angular/core';

// import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule} from '@angular/material/toolbar';



import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule, FormsModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatProgressSpinnerModule],

exports: [MatNativeDateModule, FormsModule, MatDatepickerModule,
  MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, MatProgressSpinnerModule],

})

export  class  MyMaterialModule { }
