import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct | undefined;

  ngOnInit(): void {}

}
