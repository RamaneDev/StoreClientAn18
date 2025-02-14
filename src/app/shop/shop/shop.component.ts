import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/Product';
import { ShopService } from '../shop.service';
import { IBrand } from '../../shared/models/Brand';
import { IProductType } from '../../shared/models/ProductType';
import { ShopParams } from '../../shared/models/ShopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  products: IProduct[] | undefined;
  brands: IBrand[] | undefined;
  types: IProductType[] | undefined;
  totalCount: number;
  shopParams = new ShopParams();
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to Hight', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ]

  /**
   *
   */
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts(): void {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (r) => {
        this.products = r.data;
        this.totalCount = r.count
      },
      error: (e) => console.log(e)
    });
  }

  getBrands(): void {
    this.shopService.getBrands().subscribe({
      next: (response) => this.brands = [{ name: "All", id: 0 }, ...response],
      error: (error) => console.log(error)
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe({
      next: (response) => this.types = [{ name: "All", id: 0 }, ...response],
      error: (e) => console.log(e)
    });
  }

  onBrandSelected(idBrand: number) {
    this.shopParams.brandId = idBrand;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(idType: number) {
    this.shopParams.typeId = idType;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event.page;
      this.getProducts();
    }
  }
}
