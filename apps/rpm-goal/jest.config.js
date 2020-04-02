module.exports = {
  name: 'rpm-goal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rpm-goal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
