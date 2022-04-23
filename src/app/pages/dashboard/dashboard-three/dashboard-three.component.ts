import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BreadcrumbItem } from 'src/app/shared/page-title/page-title.model';
import { ChatMessage } from 'src/app/shared/widget/chat/chat.model';
import { CHATMESSAGES } from 'src/app/shared/widget/chat/data';
import { INBOXMESSAGES } from 'src/app/shared/widget/inbox/data';
import { Message } from 'src/app/shared/widget/inbox/inbox.model';
import { StatisticsCard3 } from 'src/app/shared/widget/statistics-card3/statistics-card3.model';
import { TODOLIST } from 'src/app/shared/widget/todo/data';
import { ToDoItem } from 'src/app/shared/widget/todo/todo.model';
import { ChartjsOptions } from '../../charts/chartjs/chartjs.model';



@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  styleUrls: ['./dashboard-three.component.scss']
})
export class DashboardThreeComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  statisticsCardData: StatisticsCard3[] = [];
  inboxMessages: Message[] = [];
  chatMessages: ChatMessage[] = [];
  todoList: ToDoItem[] = [];

  revenueChartOptions!: ChartjsOptions;
  // revenueChartColors: Color[] = [];

  performanceChartOptions!: ChartjsOptions;
  // performanceChartColors: Color[] = [];

  constructor () { }

  ngOnInit(): void {
    this.pageTitle = [{ label: 'Dashboards', path: '/' }, { label: 'Dashboard 3', path: '/', active: true }];
    this._fetchStatisticsData();
    this.initCharts();
    this._fetchMessage();
    this._fetchChatMessage();
    this._fetchTodoList();
  }

  /**
   * fetches statistics data
   */
  _fetchStatisticsData(): void {
    this.statisticsCardData = [
      {
        id: 1,
        title: "Income Status",
        stats: 31570,
        trendLabel: 'Total income',
        trendValue: '$22506',
        trendIcon: 'fa fa-caret-up',
        variant: 'success',
        trendStats: '10.25',
        options: {
          prefix: '$',
          duration: 2
        }
      },
      {
        id: 2,
        title: "Sales Status",
        stats: 683,
        trendLabel: 'Total sales',
        trendValue: '2398',
        trendIcon: 'fa fa-caret-down',
        variant: 'danger',
        trendStats: '7.85',
      },
      {
        id: 3,
        title: "Recent Users",
        stats: 3.2,
        trendLabel: 'Total users',
        trendValue: '121 M',
        trendIcon: 'fa fa-caret-up',
        variant: 'success',
        trendStats: '3.64',
        options: {
          suffix: 'M',
          decimalPlaces: 1,
          duration: 2
        }
      },
      {
        id: 4,
        title: "Total Revenue",
        stats: 68541,
        trendLabel: 'Total revenue',
        trendValue: '$1.2 M',
        trendIcon: 'fa fa-caret-up',
        variant: 'success',
        trendStats: '17.48',
        options: {
          prefix: '$',
          duration: 2
        }
      }
    ];
  }

  /**
  * fetch inbox messages
  */
  _fetchMessage(): void {
    this.inboxMessages = INBOXMESSAGES;
  }

  /**
   * fetches chat message
   */
  _fetchChatMessage(): void {
    this.chatMessages = CHATMESSAGES;
  }

  /**
   * fetches todo list
   */
  _fetchTodoList(): void {
    this.todoList = TODOLIST;
  }

  /**
   * initialize charts
   */
  initCharts(): void {

    //default config
    // Chart.defaults.global.defaultFontColor = "#8391a2";
    // Chart.defaults.scale.gridLines.color = "#8391a2";

    this.revenueChartOptions = {
      type: 'line',
      chartOptions: {
        maintainAspectRatio: false,
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            display: false
          },
          tooltip: {
            intersect: false
          }
        },
        scales: {
          xAxes: {
            grid: {
              color: "rgba(0,0,0,0.05)"
            }
          },
          yAxes: {
            ticks: {
              stepSize: 20
            },
            display: true,
            grid: {
              color: "rgba(0,0,0,0)",
            }
          }
        }
      },
      chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Current Week",
        backgroundColor: 'rgba(26, 188, 156, 0.3)',
        borderColor: '#1fa083',
        data: [32, 42, 42, 62, 52, 75, 62],
        tension: 0.4,
        fill: {
          target: 'origin',
          above: 'rgba(26, 188, 156, 0.3)',
        },
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointBorderColor: '#1fa083',
        pointHoverBorderColor: '#1fa083',
        pointBorderWidth: 1.5,
        capBezierPoints: true,
      }, {
        label: "Previous Week",
        fill: true,
        backgroundColor: 'transparent',
        borderColor: '#f1556c',
        borderDash: [5, 5],
        data: [42, 58, 66, 93, 82, 105, 92],
        tension: 0.4,
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointBorderColor: '#f1556c',
        pointHoverBorderColor: '#f1556c',
        pointBorderWidth: 1.5,
        capBezierPoints: true,
      }]
    };


    this.performanceChartOptions = {
      type: 'bar',
      chartOptions: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          yAxes: {
            grid: {
              display: false
            },
            stacked: false,
            ticks: {
              stepSize: 20
            }
          },
          xAxes: {
            stacked: false,
            grid: {
              color: "rgba(0,0,0,0.01)"
            }
          }
        }
      },
      chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Sales Analytics",
          backgroundColor: '#4a81d4',
          borderColor: '#4a81d4',
          hoverBackgroundColor: '#4a81d4',
          hoverBorderColor: '#4a81d4',
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
        },
        {
          label: "Dollar Rate",
          backgroundColor: '#e3eaef',
          borderColor: '#e3eaef',
          hoverBackgroundColor: '#e3eaef',
          hoverBorderColor: '#e3eaef',
          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
        }
      ]

    };

  }

  /**
 * adds new task in todo list
 * @param newTask task to be added in list
 */
  addTask(newTask: string): void {
    const newTaskItem: ToDoItem = {
      id: this.todoList.length + 1,
      text: newTask,
      completed: false
    }
    let todoItems = [newTaskItem, ...this.todoList];
    this.todoList = todoItems;
  }


  /**
   * Archives the todos
   */
  archiveTodos(): void {
    this.todoList = this.todoList.filter((todoItem: ToDoItem) => todoItem.completed === false);
  }

}
