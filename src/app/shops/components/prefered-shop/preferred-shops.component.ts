import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../services/shop.service';
import {Shop} from '../../models/shop.model';

@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {

  preferredShop: Shop[];

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.getPreferredShops();
  }

  getPreferredShops() {
    this.shopService.getPreferredShops().subscribe(result => {
      this.preferredShop = result;
    }, error => {

    });
  }

  remove(shop: Shop) {
    this.shopService.removeLike(shop.id).subscribe(result=>{
      let index = this.preferredShop.indexOf(shop);
      if(index !== -1){
        this.preferredShop.splice(index,1);
      }
    });
  }
}
