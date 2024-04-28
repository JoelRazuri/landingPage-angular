import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.models';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productsList: IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router)
  loading: boolean = true;
  
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
      this.loading = false;
    });
  }

  navigate(id: number) {
    this._router.navigate(['/products', id]);
  }
}
