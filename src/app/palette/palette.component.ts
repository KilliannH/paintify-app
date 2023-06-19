import { Component, Input } from '@angular/core';
import { Color } from 'src/types/color';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
  colors: Color[] = [
    {id: 1, name: "Yellow", code: "#FFEB3B", selected: true},
    {id: 1, name: "Red", code: "#F44336", selected: false},
    {id: 2, name: "Blue", code: "#3F51B5", selected: false},
    {id: 3, name: "Green", code: "#4CAF50", selected: false}
  ]

}
