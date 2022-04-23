import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { ChartStatistics } from 'src/app/shared/widget/chart-statistics/chart-statistics.model';
import { StatisticsCard2 } from 'src/app/shared/widget/statistics-card2/statistics-card2.model';
import { ChartOptions } from '../../charts/apex/apex-chart.model';
import { SellingProductsItem } from './dashboard-two.model';
import { SELLINGPRODUCTSDATA } from './data';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.scss']
})
export class DashboardTwoComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];

  salesChart!: Partial<ChartOptions>;
  incomeChart!: Partial<ChartOptions>;
  usersChart!: Partial<ChartOptions>;

  statisticsData: StatisticsCard2[] = [];
  salesChartStatistics: ChartStatistics[] = [];
  incomeChartStatistics: ChartStatistics[] = [];
  userChartStatistics: ChartStatistics[] = [];

  sellingProducts: SellingProductsItem[] = [];

  worldMapConfig: any = {};


  constructor () { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Dashboards', path: '/' }, { label: 'Dashboard 2', path: '/', active: true }];
    this._fetchStatisticsData();
    this._fetchTopSelllingProducts();
    this.initCharts();
    this.initMapConfig();
  }

  /**
   * fetches statisctics data
   */
  _fetchStatisticsData(): void {
    this.statisticsData = [
      {
        id: 1,
        variant: 'blue',
        description: "Total Revenue",
        icon: 'fe-aperture',
        stats: 12145,
        progress: 60,
        options: {
          prefix: '$',
        }
      },
      {
        id: 2,
        variant: 'success',
        description: "January's Sales",
        icon: 'fe-shopping-cart',
        stats: 1576,
        progress: 49
      },
      {
        id: 3,
        variant: 'warning',
        description: "Payouts",
        icon: 'fe-bar-chart-2',
        stats: 8947,
        progress: 18,
        options: {
          prefix: '$',
        }
      },
      {
        id: 4,
        variant: 'info',
        description: "Available Stores",
        icon: 'fe-cpu',
        stats: 178,
        progress: 74
      }
    ];
  }

  /**
   * initialize charts
   */
  initCharts(): void {
    this._fetchChartStatistics();

    this.salesChart =
    {
      series: [
        {
          type: 'area',
          data: [0, 23, 43, 35, 44, 45, 56, 37, 40],
        },
        {
          type: 'area',
          data: [25, 23, 26, 24, 25, 32, 30, 24, 19],
        },
      ],
      chart: {
        type: 'line',
        height: 240,
        width: "100%",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'straight',
        width: 1,
      },
      fill: {
        type: 'solid',
        opacity: [0.3, 0.3],
      },
      colors: ['#00acc1', '#f1556c'],
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    }

    this.incomeChart = {
      series: [{ data: [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12] }],
      chart: {
        type: 'bar',
        height: 250,
        width: 250,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '65%',
        },
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      stroke: {
        width: 0,
        curve: 'smooth',
      },
      colors: ['#00acc1'],
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    }

    this.usersChart = {
      series: [20, 40, 30, 10],
      chart: {
        type: 'pie',
        height: 270,
      },
      colors: ['#00acc1', '#4b88e4', '#e3eaef', '#fd7e14'],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    }


  }

  /**
   * initialize map
   */
  initMapConfig(): void {
    this.worldMapConfig = {
      markers: [
        {
          coords: [41.9, 12.45],
          name: 'Vatican City',
        },
        {
          coords: [43.73, 7.41],
          name: 'Monaco',
        },
        {
          coords: [-0.52, 166.93],
          name: 'Nauru',
        },
        {
          coords: [-8.51, 179.21],
          name: 'Tuvalu',
        },
        {
          coords: [43.93, 12.46],
          name: 'San Marino',
        },
        {
          coords: [47.14, 9.52],
          name: 'Liechtenstein',
        },
        {
          coords: [7.11, 171.06],
          name: 'Marshall Islands',
        },
        {
          coords: [17.3, -62.73],
          name: 'Saint Kitts and Nevis',
        },
        {
          coords: [3.2, 73.22],
          name: 'Maldives',
        },
        {
          coords: [35.88, 14.5],
          name: 'Malta',
        },
        {
          coords: [12.05, -61.75],
          name: 'Grenada',
        },
        {
          coords: [13.16, -61.23],
          name: 'Saint Vincent and the Grenadines',
        },
        {
          coords: [13.16, -59.55],
          name: 'Barbados',
        },
        {
          coords: [17.11, -61.85],
          name: 'Antigua and Barbuda',
        },
        {
          coords: [-4.61, 55.45],
          name: 'Seychelles',
        },
        {
          coords: [7.35, 134.46],
          name: 'Palau',
        },
        {
          coords: [42.5, 1.51],
          name: 'Andorra',
        },
        {
          coords: [14.01, -60.98],
          name: 'Saint Lucia',
        },
        {
          coords: [6.91, 158.18],
          name: 'Federated States of Micronesia',
        },
        {
          coords: [1.3, 103.8],
          name: 'Singapore',
        },
        {
          coords: [0.33, 6.73],
          name: 'SÃ£o TomÃ© and PrÃ­ncipe',
        },
      ],
      markerStyle: {
        initial: {
          r: 9,
          fill: '#6658dd',
          'fill-opacity': 0.9,
          stroke: '#fff',
          'stroke-width': 7,
          'stroke-opacity': 0.4,
        },
        hover: {
          fill: '#6658dd',
          stroke: '#fff',
          'fill-opacity': 1,
          'stroke-width': 1.5,
        },
      },
      backgroundColor: 'transparent',
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: '#ced4da',
        },
      },
    }
  }

  /**
   * fetches chart statistics data
   */
  _fetchChartStatistics(): void {
    this.salesChartStatistics = [{
      title: 'Target',
      stats: '$7.8k',
      icon: 'fe-arrow-down',
      variant: 'danger'
    },
    {
      title: 'Last week',
      stats: '$1.4k',
      icon: 'fe-arrow-up',
      variant: 'success'
    },
    {
      title: 'Last Month',
      stats: '$9.8k',
      icon: 'fe-arrow-down',
      variant: 'danger'
    }];

    this.incomeChartStatistics = [{
      title: 'Target',
      stats: '641',
      icon: 'fe-arrow-up',
      variant: 'success'
    },
    {
      title: 'Last week',
      stats: '234',
      icon: 'fe-arrow-down',
      variant: 'danger'
    },
    {
      title: 'Last Month',
      stats: '3201',
      icon: 'fe-arrow-up',
      variant: 'success'
    }];

    this.userChartStatistics = [{
      title: 'Target',
      stats: '18k',
      icon: 'fe-arrow-down',
      variant: 'danger'
    },
    {
      title: 'Last week',
      stats: '3.25k',
      icon: 'fe-arrow-up',
      variant: 'success'
    },
    {
      title: 'Last Month',
      stats: '28k',
      icon: 'fe-arrow-down',
      variant: 'danger'
    }]
  }

  /**
   * fetches top selling products data
   */
  _fetchTopSelllingProducts(): void {
    this.sellingProducts = SELLINGPRODUCTSDATA;
  }



}
