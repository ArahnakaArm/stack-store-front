import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-one/dashboard-one.module').then(m => m.DashboardOneModule)
  },
  {
    path: 'dashboard-2',
    loadChildren: () => import('./dashboard/dashboard-two/dashboard-two.module').then(m => m.DashboardTwoModule)
  },
  {
    path: 'dashboard-3',
    loadChildren: () => import('./dashboard/dashboard-three/dashboard-three.module').then(m => m.DashboardThreeModule)
  },
  {
    path: 'dashboard-4',
    loadChildren: () => import('./dashboard/dashboard-four/dashboard-four.module').then(m => m.DashboardFourModule)
  },
  { path: 'pages', loadChildren: () => import('./extra-pages/extra-pages.module').then(m => m.ExtraPagesModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
  { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'extended-ui', loadChildren: () => import('./extended-ui/extended-ui.module').then(m => m.ExtendedUiModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
