import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RitosComplementaresComponent } from './features/ritos-complementares/ritos-complementares.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ritos-complementares', component: RitosComplementaresComponent}
];
