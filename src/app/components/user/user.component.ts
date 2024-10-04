import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  title = 'User List!';
  @Input() users: User[] = [];
  @Output() idUserEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() selectedUserEventEmitter: EventEmitter<User> = new EventEmitter();

  onRemoveUser(id: number) {
    this.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User) {
    this.selectedUserEventEmitter.emit(user);
  }
}
