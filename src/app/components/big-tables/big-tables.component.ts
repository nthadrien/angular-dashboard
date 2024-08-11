import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { TablesBtnComponent } from "../tables-btn/tables-btn.component";

interface mock {
  id: number;
  name:string;
  age:number;
  email:string;
  occupation: string;
  location:string;
  active:boolean;
}



@Component({
  selector: 'app-big-tables',
  standalone: true,
  imports: [TablesBtnComponent],
  templateUrl: './big-tables.component.html',
  styleUrl: './big-tables.component.css'
})
export class BigTablesComponent {

  headings:string[] = [];
  showpopUp:boolean = false;

  mockData:mock[] = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      occupation: "Software Developer",
      location: "New York",
      active: true
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      occupation: "Graphic Designer",
      location: "Los Angeles",
      active: false
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 25,
      email: "alice.johnson@example.com",
      occupation: "Data Analyst",
      location: "Chicago",
      active: true
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 42,
      email: "bob.brown@example.com",
      occupation: "Project Manager",
      location: "Houston",
      active: true
    },
    {
      id: 5,
      name: "Charlie Green",
      age: 30,
      email: "charlie.green@example.com",
      occupation: "Web Developer",
      location: "San Francisco",
      active: false
    },
    {
      id: 6,
      name: "Diana White",
      age: 29,
      email: "diana.white@example.com",
      occupation: "UX Designer",
      location: "Seattle",
      active: true
    },
    {
      id: 7,
      name: "Evan Black",
      age: 37,
      email: "evan.black@example.com",
      occupation: "Marketing Specialist",
      location: "Miami",
      active: false
    }
  ];

  getData () {
    return this.mockData;
  }

  cellEntry ( row:any ) : any[] {
    delete row.id;
    return  Object.values( row );
  }
  
  ngOnInit () {
    this.headings =  this.mockData[0] && Object.keys(this.mockData[0]).filter( head => head !== 'id');
    console.log('big table mounting');
  }

  sortData () {

  }

  verifyClicked (a: MouseEvent , b: any ) {
    console.log(a,b)
  }





}
