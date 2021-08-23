import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';



@NgModule({
    imports : [ MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatListModule, MatToolbarModule, MatIconModule ],
    exports : [ MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatListModule, MatToolbarModule, MatIconModule ]
})

export class MyMaterialModule{}