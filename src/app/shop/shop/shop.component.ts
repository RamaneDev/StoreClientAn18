import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/Product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{

  products : IProduct[] | undefined;

  /**
   *
   */
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() : void {
    this.shopService.getProduct().subscribe({
      next: (r) => this.products = r.data,
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    });
  }
}
