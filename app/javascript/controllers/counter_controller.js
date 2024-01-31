import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["output"];
  connect() {
    this.count = 0;
    console.log("Hello, Stimulus!", this.element);
    console.log(this.outputTarget);
  }

  increment() {
    this.count += 1;
    this.outputTarget.textContent = `You have clicked ${this.count} times`;
    console.log("Clicked")
  }
}
