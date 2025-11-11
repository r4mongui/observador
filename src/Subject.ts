// Subject.ts - Define o "sujeito" que notifica os observadores

export interface Observer {
  update(temperature: number): void;
}

export class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  setTemperature(temp: number): void {
    console.log(`🌡️ Temperatura atualizada para ${temp}°C`);
    this.temperature = temp;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}
