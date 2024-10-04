import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  users: User[] = [];
  userSelected: User;

  constructor(private userService: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe((users) => (this.users = users));
  }

  addUser(user: User) {
    if (user.id > 0) {
      this.users = this.users.map((u) => (u.id === user.id ? { ...user } : u));
    } else {
      this.users = [...this.users, { ...user }];
    }
    Swal.fire({
      title: 'Guardado!',
      text: 'Usuario guardado con exito!',
      icon: 'success',
    });
    this.userSelected = new User();
  }

  removeUser(id: number) {
    Swal.fire({
      title: 'Seguro que quieres eliminar?',
      text: 'Cuidado el usuario sera eliminado del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter((user) => user.id !== id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Usuario eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }

  setSelectedUser(userRow: User) {
    this.userSelected = { ...userRow };
  }
}
