import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-cuarta-caja',
  imports: [
    BaseChartDirective,
  ],
  standalone: true,
  templateUrl: './graphic-cuarta-caja.component.html',
  styleUrl: './graphic-cuarta-caja.component.scss'
})
export class GraphicCuartaCajaComponent implements OnInit {
  ngOnInit(): void {
    this.setChartData();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };

  public barChartLabels: string[] = [];
  public barChartData: ChartDataset<'bar'>[] = [
    {
      data: [],
      label: 'Ventas de Productos Apple',
      backgroundColor: ['blue', 'red', 'lightblue', 'green', 'yellow'],
      hoverBackgroundColor: 'black',
    }
  ];

  public barChartType: ChartType = 'bar';

  private setChartData(): void {
    const data = {
      labels: ['iPhone', 'iPad', 'MacBook', 'Apple Watch', 'AirPods'],
      values: [20, 50, 150, 120, 100]
    };

    this.barChartLabels = data.labels;
    this.barChartData[0].data = data.values;
  }
}
