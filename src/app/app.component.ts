import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {

  cricketPlayer: ICricketPlayer[] = [];
  ngOnInit() {
    this.cricketPlayer = [{
      name: "Sachin",
      lastName: 'Tendulkar'
    },
    {
      name: "MS",
      lastName: 'Dhoni'
    },
    {
      name: "Virat",
      lastName: 'Kohli'
    }]

  }
}

interface ICricketPlayer {
  name: string;
  lastName: string;
}
