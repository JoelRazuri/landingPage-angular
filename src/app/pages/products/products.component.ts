import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.models';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productsList: IProduct[] = [];

  constructor() {}

  private _apiService = inject(ApiService);
  
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
    });
  }

}
