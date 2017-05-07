import { Component, OnInit } from '@angular/core';
import {User} from "../../entites/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title:string = "participants";
  users:User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        "id": "667b3bd6-7401-4f59-a260-4ce30cc79053",
        "civ": 1,
        "email": "Chandra.Moreno@softeam.fr",
        "job": 4
      },
      {
        "id": "e6ef42b9-55af-4936-ae44-1d8cab894a34",
        "civ": 2,
        "email": "Phyllis.Vang@softeam.fr",
        "job": 1
      },
      {
        "id": "3019155d-154a-4d6c-b3ea-ba1e97dad879",
        "civ": 2,
        "email": "Lelia.Douglas@softeam.fr",
        "job": 2
      },
      {
        "id": "98d3e971-419e-477f-8938-beea3f9624cb",
        "civ": 2,
        "email": "Padilla.Duke@softeam.fr",
        "job": 2
      },
      {
        "id": "374f90c1-b2b2-456c-85a3-a8758ac46293",
        "civ": 1,
        "email": "Deena.Short@softeam.fr",
        "job": 3
      },
      {
        "id": "437b4548-50b3-4299-8fc0-2b1f840aeb70",
        "civ": 2,
        "email": "Bowman.Good@softeam.fr",
        "job": 4
      },
      {
        "id": "02de9e5b-6522-45f7-9d08-844d58ee5078",
        "civ": 1,
        "email": "Bethany.Reeves@softeam.fr",
        "job": 2
      }

    ]
  }

}
