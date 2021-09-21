import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importar Firebase Guards
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// Define redirecionadores
const toLogin = () => redirectUnauthorizedTo(['/login']); // Usuário  não logado
const isLogged = () => redirectLoggedInTo(['/profile']); // Usuário logado

const routes: Routes = [
  // Rota da página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },

  // Página inicial
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
  },

  // Página de contatos
  {
    path: 'contacts',
    loadChildren: () =>
      import('./page/contacts/contacts.module').then(
        (m) => m.ContactsPageModule
      ),
  },

  // Página sobre
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.module').then((m) => m.AboutPageModule),
  },

 // Página sobre
 {
  path: 'adotar',
  loadChildren: () =>
    import('./user/adotar/adotar.module').then((m) => m.AdotarPageModule),
},

 // Página doar
 {
  path: 'doar',
  loadChildren: () =>
    import('./user/doar/doar.module').then((m) => m.DoarPageModule),
},

// Pagina Login
  {
    path: 'login',
    loadChildren: () =>
      import('./user/login/login.module').then((m) => m.LoginPageModule),
  },

//Pagina Profile
  {
    path: 'profile',
    loadChildren: () =>
      import('./user/profile/profile.module').then((m) => m.ProfilePageModule),
  },

  //Pagina Logout
  {
    path: 'logout',
    loadChildren: () =>
      import('./user/logout/logout.module').then((m) => m.LogoutPageModule),
  },
// Pagina Registro
  {
    path: 'register',
    loadChildren: () =>
      import('./user/register/register.module').then((m) => m.RegisterPageModule),
  },
  // Rota curinga (rotas inexistentes)
  // TEM QUE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () =>
      import('./page/e404/e404.module').then((m) => m.E404PageModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
