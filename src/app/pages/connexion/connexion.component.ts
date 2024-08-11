import { Component  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  userDetails = { user:'', pasword: ''};

  applyForm = new FormGroup({
    user : new FormControl(''),
    password: new FormControl('')
  });

  constructor (
    private authService : AuthService
  ) {}

  onSubmit () : void {
     this.authService.login(
      this.applyForm.value.user ?? '',
      this.applyForm.value.password ?? ''
    );
  }


}
