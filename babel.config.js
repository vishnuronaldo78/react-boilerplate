module.exports = function(api) {
    api.cache(true);
  
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-react',
    ];
    const plugins = [
      '@babel/transform-react-constant-elements',
      '@babel/transform-react-inline-elements',
      'transform-react-remove-prop-types',
      'transform-react-pure-class-to-function',
      '@babel/plugin-transform-runtime',
      'react-hot-loader/babel',
      'lodash',
  
      // Stage 2 
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
  
      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-proposal-json-strings',
  
      // Stage 1
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining"
    ];
  
    return {
      presets,
      plugins,
    };
  };
  