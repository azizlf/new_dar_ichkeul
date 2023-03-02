import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router);
  }

}
