import { RouteStop } from './routeStop';

export class Route {
  routeId: number;
  name: string;
  startPoint: string = "";
  endPoint: string = "";
  description: string = "";
  vehicle: string = "";
  staffId: number;
  teacherId: number;
  routeStops: Array<RouteStop>;
}