import { Component } from '@angular/core';
import { Color } from 'src/types/color';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
  colors: Color[] = [
    {id: 0, name: "Yellow", code: "#FFEB3B"}, {id: 1, name: "Red", code: "#F44336"},
    {id: 2, name: "Blue", code: "#3F51B5"}, {id: 3, name: "Green", code: "#4CAF50"}
  ]
}
