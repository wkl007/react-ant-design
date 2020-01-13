module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
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
  root: true,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    'camelcase': 0,//强制驼峰法命名
    'handle-callback-err': 0,//nodejs 处理错误
    'no-console': 0,//禁止使用console
    'no-unused-vars': [0, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    'no-return-assign': 0,//return 语句中不能有赋值表达式
    'no-undef': 0,//不能有未定义的变量
    'node/no-deprecated-api': 0,
    'react/prop-types': 0,
    // jsx 的开始和闭合处禁止有空格
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'allow',
        'afterOpening': 'never'
      }
    ],
    'react/jsx-indent': ['error', 2],
    'standard/no-callback-literal': 0
  }
}
