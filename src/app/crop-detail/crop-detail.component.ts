import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crop-detail',
  templateUrl: './crop-detail.component.html',
  styleUrls: ['./crop-detail.component.css']
})
export class CropDetailComponent implements OnInit {
  public crop: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCropDetail(+this.route.snapshot.paramMap.get('id'));
  }

  getCropDetail(cropId: number): void {
    this.apiService.getCropById(cropId).subscribe(data => {
      this.crop = data;
    }, err => {
      this.toastr.error('could not fetch crop', 'Error');
    });
  }

}
