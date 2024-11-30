import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';


export const routes: Routes = [
  
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'navegacao',
    component:NavegacaoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'perguntas',
    component: PerguntasComponent
  }
];
