import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
// import { ChartConfiguration, ChartType } from 'chart.js' 
// import { BaseChartDirective } from 'ng2-charts' 

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent implements OnInit {
  coinData: any;
  coidId!: string;
  days: number = 1;
  currency: string = 'INR';

  

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.coidId = val['id'];
    });

    this.getCoinData();
  }

  getCoinData() {
    this.api.getCurrencyById(this.coidId).subscribe((res) => {
      this.coinData = res;
      console.log('coin Data', res);
    });
  }
}


// 2121122242010