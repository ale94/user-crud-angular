import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users: User[] = [];
  @Output() idUserEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() selectedUserEventEmitter: EventEmitter<User> = new EventEmitter();

  onRemoveUser(id: number) {
    const confirmRemove = confirm('Esta seguro que desea eliminar?');
    if (confirmRemove) {
      this.idUserEventEmitter.emit(id);
    }
  }

  onSelectedUser(user: User) {
    this.selectedUserEventEmitter.emit(user);
  }
}
