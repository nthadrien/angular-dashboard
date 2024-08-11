import { Component } from '@angular/core';
import { OperatorService, OperInterface } from './operateurs.service';
import { TablesComponent } from '../../components/tables/tables.component';

@Component({
  selector: 'app-operateurs',
  standalone: true,
  imports: [TablesComponent],
  templateUrl: './operateurs.component.html',
  styleUrl: './operateurs.component.css'
})
export class OperateursComponent {
  title = "Operateurs";
  operateurs$:OperInterface[] = [];
  headings:string[] = []

  constructor(
    private operateursServices : OperatorService
  ) {}

  ngOnInit() {
    this.operateursServices.getOperateurs( ).then(
      data => {
        this.operateurs$ = data;
        this.headings = Object.keys(data[0]);
      }
    )
  }

}
