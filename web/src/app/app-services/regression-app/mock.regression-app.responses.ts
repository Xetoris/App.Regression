/**
 * Contains a collection of mock responses taken from the API directly.
 */
export const MockRegressionAppResponses = {
  regressionResults: {
    totalRecords: 10,
    maxScore: null,
    records: [{
      auditId: '3959e9a4-7f78-4906-a173-efc6a0bb50b3',
      buildId: '1',
      buildName: 'Test.Example',
      buildUrl: '',
      duration: 98,
      environment: 'UAT',
      exceptionLine: '114',
      exceptionMessage: '500 Internal Server Error',
      exceptionSource: '/usr/share/jenkins/workspace/TestExamples/features/step_definitions/test_steps',
      group: 'Testing',
      id: 'AWTdq0F56cdJNc297zyW',
      index: 'tests',
      machine: 'SomeMachine',
      medium: 'cucumber',
      score: null,
      source: 'features/tests/tests.feature:1',
      status: 'failed',
      tags: [
        '@test',
        '@example'
      ],
      test: 'This is an example test.',
      type: 'result',
      watchUrl: '',
      date: '2018-12-17T21:00:00Z'
    }]
  }
};
