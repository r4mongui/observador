// Observer.ts - Implementa diferentes observadores

import { Observer } from "./Subject";

export class DisplayDevice implements Observer {
  constructor(private name: string) {}

  update(temperature: number): void {
    console.log(`📺 ${this.name} exibindo nova temperatura: ${temperature}°C`);
  }
}

export class AlertSystem implements Observer {
  update(temperature: number): void {
    if (temperature > 30) {
      console.log("🚨 Alerta! Temperatura muito alta!");
    }
  }
}
