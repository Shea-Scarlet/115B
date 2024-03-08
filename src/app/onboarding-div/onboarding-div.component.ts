import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onboarding-div.component.html',
  styleUrl: './onboarding-div.component.css'
})
export class OnboardingDivComponent {
  @Input() padding?: string;
  @Input() pr?: string;
  @Input() pl?: string;
  @Input() pt?: string;
  @Input() pb?: string;
  @Input() margin?: string;
  @Input() bgColor?: string;
  @Input() width?: string;
  @Input() maxWidth?: string;
  @Input() minWidth?: string;
  @Input() height?: string;
  @Input() maxHeight?: string;
  @Input() minHeight?: string;
  @Input() display?: string;
  @Input() justifyContent?: string;
  @Input() alignItems?: string;
  @Input() flexDirection?: string;
  @Input() flexWrap?: string;
  @Input() flex?: string;
  @Input() gap?: string;
  @Input() border?: string;
  @Input() borderWidth?: string;
  @Input() borderStyle?: string;
  @Input() borderColor?: string;
  @Input() borderRadius?: string;
  @Input() outline?: string;
  @Input() position?: string;
  @Input() top?: string;
  @Input() right?: string;
  @Input() bottom?: string;
  @Input() left?: string;
  @Input() overflow?: string;
  @Input() overflowX?: string;
  @Input() overflowY?: string;
  @Input() color?: string;
  @Input() fontSize?: string;
  @Input() textAlign?: string;
  @Input() fontWeight?: string;
  @Input() lineHeight?: string;
  @Input() boxShadow?: string;
  @Input() textShadow?: string;
  @Input() backgroundImage?: string;
  @Input() backgroundSize?: string;
  @Input() backgroundPosition?: string;
  @Input() backgroundRepeat?: string;
  @Input() cursor?: string;
  @Input() transition?: string;
  @Input() animation?: string;

  styleObject: { [key: string]: string | undefined } = {};

  ngOnInit() {
    this.styleObject = {
      'padding': this.padding,
      // 'padding-right': this.pr,
      // 'padding-left': this.pl,
      // 'padding-top': this.pt,
      // 'padding-bottom': this.pb,
      'margin': this.margin,
      'background-color': this.bgColor,
      'width': this.width,
      'max-width': this.maxWidth,
      'min-width': this.minWidth,
      'height': this.height,
      'max-height': this.maxHeight,
      'min-height': this.minHeight,
      'display': this.display,
      'justify-content': this.justifyContent,
      'align-items': this.alignItems,
      'flex-direction': this.flexDirection,
      'flex-wrap': this.flexWrap,
      'flex': this.flex,
      'gap': this.gap,
      'border': this.border,
      'border-width': this.borderWidth,
      'border-style': this.borderStyle,
      'border-color': this.borderColor,
      'border-radius': this.borderRadius,
      'outline': this.outline,
      'position': this.position,
      'top': this.top,
      'right': this.right,
      'bottom': this.bottom,
      'left': this.left,
      'overflow': this.overflow,
      'overflow-x': this.overflowX,
      'overflow-y': this.overflowY,
      'color': this.color,
      'font-size': this.fontSize,
      'text-align': this.textAlign,
      'font-weight': this.fontWeight,
      'line-height': this.lineHeight,
      'box-shadow': this.boxShadow,
      'text-shadow': this.textShadow,
      'background-image': this.backgroundImage,
      'background-size': this.backgroundSize,
      'background-position': this.backgroundPosition,
      'background-repeat': this.backgroundRepeat,
      'cursor': this.cursor,
      'transition': this.transition,
      'animation': this.animation,
    }
  }
}

