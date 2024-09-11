import { Component } from '@angular/core';
import { SummaryBoxComponent } from '../../components/summary-box/summary-box.component';
import { SmallTablesComponent } from '../../components/small-tables/small-tables.component';
import { ChartsComponent } from '../../components/charts/charts.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    SummaryBoxComponent,
    SmallTablesComponent,
    ChartsComponent,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {

  title = 'angular-dashboard';

  summaryBoxes = [
    {
      title: 'Status',
      ico: '&wcirc;',
      values: '0,04',
      text: 'Culpa nobis tenetur natus deserunt.',
    },
    {
      title: 'Clients',
      ico: '&wcirc;',
      values: '14 peoples',
      text: 'Culpa nobis tenetur natus deserunt.',
    },
    {
      title: 'Shops',
      ico: '&wcirc;',
      values: '0,04',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quaerat dolorem nostrum nesciunt, in magnam! Dolore sequi eos, quis enim accusamus iusto sapiente voluptatem maxime nostrum perferendis corporis.',
    },
    {
      title: 'Affiliates',
      ico: '&wcirc;',
      values: '0,04',
      text: 'Culpa nobis tenetur natus deserunt.',
    },
  ];
}