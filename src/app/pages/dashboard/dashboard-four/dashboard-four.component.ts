import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/auth.models';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { UserCard } from 'src/app/shared/widget/user-card/user-card.model';
import { ChartOptions } from '../../charts/apex/apex-chart.model';
import { ProjectDetails } from './dashboard-four.model';
import { PROJECTDATA } from './data';

@Component({
  selector: 'app-dashboard-four',
  templateUrl: './dashboard-four.component.html',
  styleUrls: ['./dashboard-four.component.scss']
})
export class DashboardFourComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  salesChart!: Partial<ChartOptions>;
  statisticsChart!: Partial<ChartOptions>;
  incomeChart!: Partial<ChartOptions>;
  users: UserCard[] = [];
  projectsData: ProjectDetails[] = [];

  constructor () { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Dashboards', path: '/' }, { label: 'Dashboard 4', path: '/', active: true }];
    this.initChart();
    this._fetchUsers();
    this._fetchProjects();
  }

  /**
   * initialize charts
   */
  initChart(): void {
    this.salesChart = {
      series: [12, 30, 20],
      chart: {
        type: 'donut',
        height: 273,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                show: true,
                formatter: function (val) {
                  return val;
                },
              },
            },
          },
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.7
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#6658dd', '#4fc6e1', '#ebeff2'],
      legend: {
        show: false,
      },
      labels: ['Total Sales', 'Campaign Send', 'Daily Sales'],
      tooltip: {
        enabled: false,
      },
    };

    this.statisticsChart = {
      series: [
        {
          name: 'Statistics',
          data: [87, 75, 50, 75, 50, 38, 72],
        },
      ],
      chart: {
        type: 'bar',
        height: 273,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      colors: ['#00acc1'],
    };

    this.incomeChart = {
      series: [
        {
          name: 'Litecoin',
          type: 'area',
          data: [20, 65, 40, 65, 40, 65, 60],
        },
        {
          name: 'Bitcoin',
          type: 'line',
          data: [20, 95, 60, 95, 70, 95, 110],
        },
      ],
      chart: {
        height: 273,
        type: 'line',
        toolbar: {
          show: false,
        },
        stacked: false,
      },
      stroke: {
        width: [1, 2],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      fill: {
        type: 'solid',
        opacity: [0.3, 0.7],
      },
      colors: ['#4a81d4', '#e8ebed'],
      xaxis: {
        categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 200,
      },
    };
  }


  /**
   * fetches user list
   */
  _fetchUsers(): void {
    this.users = [{
      id: 1,
      name: 'Thelma Fridley',
      title: 'Admin User',
      avatar: 'assets/images/users/user-3.jpg'
    },
    {
      id: 2,
      name: 'Chandler Hervieux',
      title: 'Manager',
      avatar: 'assets/images/users/user-4.jpg'
    },
    {
      id: 3,
      name: 'Percy Demers',
      title: 'Director',
      avatar: 'assets/images/users/user-5.jpg'
    },
    {
      id: 4,
      name: 'Antoine Masson',
      title: 'Premium User',
      avatar: 'assets/images/users/user-6.jpg',
      premiumUser: true
    }
    ];
  }

  /**
   * fetches project data
   */
  _fetchProjects(): void {
    this.projectsData = PROJECTDATA;
  }

}
