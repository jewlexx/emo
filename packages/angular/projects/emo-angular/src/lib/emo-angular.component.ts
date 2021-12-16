import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-emo-angular',
  templateUrl: './emo-angular.component.html',
  styles: [],
})
export class EmoAngularComponent {
  @Input('height') height!: number;
  @Input('width') width!: number;
  @Input('emoji') emoji!: string;
  url: string = `https://twemoji.maxcdn.com/v/latest/svg/${this.parse(
    this.emoji,
  )}.svg`;

  private parse(emoji?: string): string {
    if (emoji === undefined) {
      return '';
    }

    if (emoji.length === 1) {
      return emoji.charCodeAt(0).toString(16);
    }
    const comp =
      (emoji.charCodeAt(0) - 0xd800) * 0x400 +
      (emoji.charCodeAt(1) - 0xdc00) +
      0x10000;
    return (comp < 0 ? emoji.charCodeAt(0) : comp).toString(16);
  }

  constructor() {
    console.log(this.emoji);
  }
}
