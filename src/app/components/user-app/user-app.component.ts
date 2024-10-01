import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  title = 'Listado de usuarios!';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findAll().subscribe((users) => (this.users = users));
  }
}
