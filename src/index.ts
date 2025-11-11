// index.ts - Simula o funcionamento do padrão Observer

import { WeatherStation } from "./Subject";
import { DisplayDevice, AlertSystem } from "./Observer";

const station = new WeatherStation();

const display1 = new DisplayDevice("Painel 1");
const display2 = new DisplayDevice("Painel 2");
const alert = new AlertSystem();

station.addObserver(display1);
station.addObserver(display2);
station.addObserver(alert);

station.setTemperature(25);
station.setTemperature(35);
