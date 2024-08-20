import { Routes } from '@angular/router';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
// pages components =======================
import { ErreursComponent } from './pages/erreurs/erreurs.component';
import { HistoriquesComponent } from './pages/historiques/historiques.component';
import { OperateursComponent } from './pages/operateurs/operateurs.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { EnregistrementsComponent } from './pages/enregistrements/enregistrements.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ComptesComponent } from './pages/comptes/comptes.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { Injectable } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';

export const routes: Routes = [
  // auth pages before dashboard
  { 
    path:'', redirectTo:'auth/connexion', pathMatch:'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    title: 'auth',
    children: [
      { path:'', redirectTo:'/auth/connexion', pathMatch:'full'},
      { path: 'connexion', component:ConnexionComponent, title: 'connexion' },
      { path: 'enregistrements', component: EnregistrementsComponent },
      { path: 'feedbacks', component: FeedbackComponent },
    ],
  },
  {
    path: 'tableau',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'tableau'
    },
    loadChildren: () => [ // lazy-loading dash board components
      { path:'', redirectTo:'resumer', pathMatch:'full'},
      {
        path: 'resumer',
        component: AccueilComponent,
        data: {
          breadcrumb: 'resumer'
        },
      },
      {
        path: 'parametrages',
        data: {
          breadcrumb: 'parametrages'
        },
        children: [
          {
            path: 'utilisateurs',
            component: UtilisateursComponent,
            data: {
              breadcrumb: 'utilisateurs'
            }
          },
          {
            path: 'operateurs',
            component: OperateursComponent,
            data: {
              breadcrumb: 'operateurs'
            }
          },
          {
            path: 'comptes',
            component: ComptesComponent,
            data: {
              breadcrumb: 'comptes'
            }
          },
        ],
      },
      {
        path: 'abonnements',
        component: AbonnementsComponent,
        data: {
          breadcrumb: 'abonnements'
        }
      },
      {
        path: 'historiques',
        component: HistoriquesComponent,
        data: {
          breadcrumb: 'historiques'
        }
      },
      {
        path: 'evenements',
        title:'evenements',
        component: EvenementsComponent,
        data: {
          breadcrumb: 'evenements'
        }
      }
    ],
  },
  {
    path: '**',
    component: ErreursComponent,
  },
];

// document title strategy to implement Dashboard before the title:
@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) this.title.setTitle(`Dashboard | ${title}`);
  }
}
