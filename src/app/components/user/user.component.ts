import { Component, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  title = 'User List!';
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private sharingData: SharingDataService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
    } else {
      this.userService.findAll().subscribe((users) => (this.users = users));
    }
  }

  onRemoveUser(id: number) {
    this.sharingData.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User) {
    this.sharingData.selectedUserEventEmitter.emit(user);
  }
}
