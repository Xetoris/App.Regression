// Represents the details of a regression's result.
export interface RegressionResultInterface {
  auditId: string;
  buildId: string;
  buildName: string;
  buildUrl: string;
  date: Date;
  duration: number;
  environment: string;
  exceptionLine: string;
  exceptionMessage: string;
  exceptionSource: string;
  group: string;
  id: string;
  index: string;
  machine: string;
  medium: string;
  score: number;
  status: string;
  tags: string[];
  test: string;
  type: string;
  watchUrl: string;
}
