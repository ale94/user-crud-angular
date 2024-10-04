import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user: User;

  constructor(private sharingData: SharingDataService) {
    this.user = new User();
  }

  onSubmit(userForm: NgForm) {
    this.sharingData.newUserEventEmitter.emit(this.user);
    userForm.reset();
    userForm.resetForm();
    console.log(this.user);
  }

  onClear(userForm: NgForm) {
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
}
