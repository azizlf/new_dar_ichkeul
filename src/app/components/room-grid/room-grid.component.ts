import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {
  suits: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData()
    .pipe()
    .subscribe((data: any) => {
      this.suits = data;
    });
  }

}
