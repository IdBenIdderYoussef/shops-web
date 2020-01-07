import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../services/shop.service';
import {Shop} from '../../models/shop.model';

@Component({
  selector: 'app-preferred-shops-list',
  templateUrl: './preferred-shops-list.component.html',
  styleUrls: ['./preferred-shops-list.component.css']
})
export class PreferredShopsListComponent implements OnInit {

  preferredShop: Shop[];
  isEmpty= false; // track if preferred shops list is empty

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.getPreferredShops();
  }

  getPreferredShops() {
    this.shopService.getPreferredShops().subscribe(result => {
      this.preferredShop = result;
      this.isEmpty = this.preferredShop === null || this.preferredShop.length === 0
    }, error => {

    });
  }

  remove(shop: Shop) {
    this.shopService.removeLike(shop.id).subscribe(result=>{
      let index = this.preferredShop.indexOf(shop);
      if(index !== -1){
        this.preferredShop.splice(index,1);
      }
      this.isEmpty = this.preferredShop === null || this.preferredShop.length === 0
    });
  }
}
