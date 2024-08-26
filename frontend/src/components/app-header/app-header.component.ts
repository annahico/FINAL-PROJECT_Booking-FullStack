import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Output() bookFilterEvent:EventEmitter<string> = new EventEmitter();
  filterString:string='';
  @Input() showNav:boolean=true;
  constructor() { }
  ngOnInit(): void {
  }
  onSearching()
  {
    if(this.filterString!=null)
        this.bookFilterEvent.emit(this.filterString)
  }
}
