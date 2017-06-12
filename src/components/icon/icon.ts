import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as classNames from 'classnames';
// import omit from 'omit.js';

@Component({
  selector: 'icon',
  template: `
    <i [ngClass]="classes"></i>
  `
})
export class IconComponent implements OnChanges {
  classes: string = '';

  @Input() type: string;
  @Input() className?: string;
  @Input() title?: string;
  @Input() spin?: boolean;
  @Input() style?: string; // TODO - React.CSSProperties;

  @Output() onClick?: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    let className = changes.className? changes.className.currentValue: this.className;
    let type = changes.type? changes.type.currentValue: this.type;
    let spin = changes.spin? changes.spin.currentValue: this.spin;

    this.classes = classNames({
      anticon: true,
      'anticon-spin': !!spin || type === 'loading',
      [`anticon-${type}`]: true,
    }, className);
  }
} 