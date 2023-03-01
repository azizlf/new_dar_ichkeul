import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
