/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: any, options?: any);
    revert(): void;
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
  }
}
