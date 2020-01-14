module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'standard-react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      jsx: true,
    },
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,// 禁止使用console
    'no-unused-vars': [0, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    'no-undef': 0,// 不能有未定义的变量
    'no-useless-escape': 0, // 禁止不必要的转义
    // jsx 的开始和闭合处禁止有空格
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'allow',
        'afterOpening': 'never'
      }
    ],
    'spaced-comment': ['error', 'always'] //注释前有空白
  }
}
