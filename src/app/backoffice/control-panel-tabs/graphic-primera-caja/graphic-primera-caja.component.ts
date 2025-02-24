import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartConfiguration, ChartDataset, ChartType} from 'chart.js';

@Component({
  selector: 'app-graphic-primera-caja',
  imports: [BaseChartDirective],
  standalone: true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {

  ngOnInit(): void {
    this.setChartData()
  }

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true, // Línea obligatoria
    maintainAspectRatio: false, // Proporción del gráfico
    plugins: {
      legend: { // campo opcional
        display: true,
        position: 'bottom'
      },
      tooltip: {},
      title: { // Campo opcional
        text: "Primer gráfico",
        display: true,
      }
    }
  }

  public doughnutChartLabels: string[] = []
  public doughnutChartData: { labels: string[], datasets: ChartDataset<'doughnut'>[]} = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }]
  }

  public doughnutChartType: ChartType = 'doughnut';

  private setChartData(): void {
    this.doughnutChartLabels = [
      "Iphone",
      "Tablet",
      "Ordenador",
      "Fundas",
    ]
    this.doughnutChartData.labels = [
      "Iphone",
      "Tablet",
      "Ordenador",
      "Fundas",
    ]
    this.doughnutChartData.datasets[0].data = [20, 30, 40, 50]
    this.doughnutChartData.datasets[0].backgroundColor = ["purple", "red", "blue", "darkblue"]
  }

}
