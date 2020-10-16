import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
  public crops: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCropData();
  }

  getCropData(): void {
    this.apiService.getTenCrops().subscribe(
      data => {
        this.crops = data;
      }, err => {
        console.log('error occurred');
      }
    );
  }

  searchCrops(cropName: string): void {
    this.apiService.searchCrops(cropName).subscribe(
      data => {
        this.crops = data;
      }, err => {
        console.log('error occurred');
      }
    );
  }
}
