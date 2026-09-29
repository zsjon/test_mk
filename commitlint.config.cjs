module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commitMessage) => commitMessage.startsWith('Merge ')],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'test', 'chore', 'design', 'comment', 'rename', 'remove'],
    ],
    'header-max-length': [2, 'always', 1000],
    'body-max-line-length': [0],
  },
}
