export enum indicator {
  Temp = 'temp',
  Humidity = 'humidity',
  WindSpeed = 'wind speed',
  Illumination = 'illumination',
}

type sensorsData = {
  [key in indicator]: string;
};

export interface sensors {
  id: number;
  coordinates: [number, number];
  availableIndicators: indicator[];
  date: number;
  data: sensorsData;
}
