import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';



@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService: ApiService) { }


  routeSub:any


  ngOnInit(): void {

    this.routeSub = this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log(+params['id']);

    });
  }

}
