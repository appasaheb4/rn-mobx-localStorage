export interface IFeatureStartup {
  routes: IRouteDefinition[];
}

export interface IRouteDefinition {
  key: string;
  component: React.FunctionComponent;
}
