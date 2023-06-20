import { Component, Input } from '@angular/core';
import { Color } from 'src/types/color';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent {
  colors: Color[] = [
    {name: "Yellow", code: "#FFEB3B", selected: true},
    {name: "Red", code: "#F44336", selected: false},
    {name: "Blue", code: "#3F51B5", selected: false},
    {name: "Green", code: "#4CAF50", selected: false}
  ]

  selectedColorIndex: number = 0;

  _onClick(elm: any) {
    this.selectedColorIndex = this.colors.findIndex((x) => {
      return x.name === elm.id;
    });
    
    for(let i = 0; i < this.colors.length; i++) {
      if(i === this.selectedColorIndex) {
        this.colors[i].selected = true;
      } else {
        this.colors[i].selected = false;
      }
    }
  }

  public getSelectedColor() {
    return this.colors[this.selectedColorIndex];
  }
}
