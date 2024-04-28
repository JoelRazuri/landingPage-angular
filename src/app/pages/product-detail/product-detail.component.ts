import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService)
  public product?: IProduct;
  loading: boolean = true;

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    })
  }
}
