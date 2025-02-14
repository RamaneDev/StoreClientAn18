import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent implements OnInit{

    @Input() pageSize : number;
    @Input() totalCount : number;
    @Output() pagerChanged =  new EventEmitter<number>();

    ngOnInit(): void {}

    onPagerChanged(event: any) {
      this.pagerChanged.emit(event);
    }
}

