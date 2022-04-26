import { RouteObject } from "react-router-dom";

export interface IRoute extends RouteObject {
  fetchData?: Function;
  routes?: IRoute[];
  validation?: Function;
  IndexComponent?: React.ReactNode;
}
