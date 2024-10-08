import { Component } from '@angular/core';
import { TablesComponent } from "../../components/tables/tables.component";
import { UserInterface, utilisateursService } from './utilisateurs.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileCsv, faFileEdit, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [TablesComponent, FontAwesomeModule],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {

  faPDF = faFilePdf;
  faCSV = faFileCsv;

  title = "Utilisateurs";
  // utilisateurs$!: Observable<UserInterface[]>;
  utilisateurs$:UserInterface[] = []
  headings:string[] = []


  constructor(
    private userServices : utilisateursService
  ) {}

  ngOnInit () {
    this.userServices.getUsers().then( data =>{
       this.utilisateurs$ = data;
       this.headings = Object.keys(data[0]).filter( it => !['id','password'].includes(it));
    });
  }
}
