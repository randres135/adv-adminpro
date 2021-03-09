import { Component, Input} from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  @Input() title:string = 'Sin titulo'

  @Input('labels')  public doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input ('data') public doughnutChartData: MultiDataSet = [
    [500, 250, 50],
  ];

  public colors:Color[]=[
    {backgroundColor:['#6857E6','#009FEE','#FFB414']}
  ]
}
