module.exports = {
	globals: {
		'require': true,
		'window': true,
		'document': true,
		'module': true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	plugins: [
		'react'
	],
	settings: {
		'react': {
			'pragma': 'React',  // Pragma to use, default to "React"
			'version': '15.0' // React version, default to the latest React stable release
		}
	},
	rules: {
		'comma-dangle': [1, 'never'],
		'no-cond-assign': [2, 'except-parens'],
		'no-console': 1,
		'no-constant-condition': 1,
		'no-control-regex': 0,
		'no-debugger': 1,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 1,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 1,
		'no-extra-parens': 0,
		'no-extra-semi': 1,
		'no-func-assign': 2,
		'no-inner-declarations': 0,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 1,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 1,
		'no-sparse-arrays': 2,
		'no-unreachable': 1,
		'use-isnan': 2,
		'valid-jsdoc': [1, {'prefer': {'return': 'returns'}, 'preferType': {'String': 'String', 'object': 'Object'}}],
		'valid-typeof': 2,
		'no-unexpected-multiline': 1,
		'accessor-pairs': 0,
		'block-scoped-var': 1,
		'complexity': 0,
		'consistent-return': 0,
		'curly': [1, 'multi-line'],
		'default-case': 0,
		'dot-notation': 0,
		'dot-location': [1, 'property'],
		'eqeqeq': [1, 'smart'],
		'guard-for-in': 0,
		'no-alert': 1,
		'no-caller': 2,
		'no-div-regex': 1,
		'no-else-return': 0,
		'no-empty-label': 0,
		'no-eq-null': 0,
		'no-eval': 1,
		'no-extend-native': 2,
		'no-extra-bind': 1,
		'no-fallthrough': 2,
		'no-floating-decimal': 1,
		'no-implicit-coercion': 0,
		'no-implied-eval': 1,
		// 'no-invalid-this': 2, -- false positive due to https://github.com/babel/eslint-plugin-babel/issues/12
		'no-invalid-this': 0,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 0,
		'no-loop-func': 0,
		'no-multi-spaces': 0,
		'no-multi-str': 0,
		'no-native-reassign': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-new': 1,
		'no-octal-escape': 1,
		'no-octal': 2,
		'no-param-reassign': 0,
		'no-process-env': 0,
		'no-proto': 2,
		'no-redeclare': [2, {'builtinGlobals': true}],
		'no-return-assign': [2, 'except-parens'],
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unused-expressions': 1,
		'no-useless-call': 2,
		'no-void': 0,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': 2,
		'vars-on-top': 1,
		'wrap-iife': [2, 'inside'],
		'yoda': 0,
		'strict': 0,
		'init-declarations': 0,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-shadow-restricted-names': 2,
		'no-shadow': [2, {'builtinGlobals': true, 'hoist': 'all'}],
		'no-undef-init': 0,
		'no-undef': 2,
		'no-undefined': 2,
		'no-unused-vars': 1,
		'no-use-before-define': [2, {'functions': false}],
		'callback-return': 0,
		'handle-callback-err': 0,
		'no-mixed-requires': 0,
		'no-new-require': 0,
		'no-path-concat': 0,
		'no-process-exit': 0,
		'no-restricted-modules': 0,
		'no-sync': 0,
		'array-bracket-spacing': [1, 'never', {}],
		'brace-style': [1, '1tbs', {}],
		'camelcase': [1, {'properties': 'always'}],
		'comma-spacing': [1, {'after': true}],
		'comma-style': 1,
		'computed-property-spacing': [1, 'never'],
		'consistent-this': 0,
		'eol-last': 1,
		'func-names': 0,
		'func-style': 0,
		'id-length': 0,
		'indent': [1, 'tab', {'SwitchCase': 1}],
		'key-spacing': 0,
		// 'key-spacing': [1, {
		// 	'singleLine': {
		// 		'beforeColon': false,
		// 		'afterColon' : true
		// 	},
		// 	'multiLine': {
		// 		'afterColon': true
		// 		'align': 'colon'
		// 	}
		// }],
		'lines-around-comment': 0,
		'linebreak-style': [1, 'unix'],
		'max-nested-callbacks': [1, 4],
		'new-cap': [2, {'newIsCap': true, 'capIsNew': false}],
		'new-parens': 1,
		'newline-after-var': [1, 'always'],
		'no-array-constructor': 2,
		'no-continue': 0,
		'no-inline-comments': 0,
		'no-lonely-if': 1,
		'no-mixed-spaces-and-tabs': 1,
		'no-multiple-empty-lines': 0,
		'no-nested-ternary': 1,
		'no-new-object': 2,
		'no-spaced-func': 1,
		'no-ternary': 0,
		'no-trailing-spaces': 1,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 1,
		'object-curly-spacing': [1, 'never'],
		'one-var': 0,
		'operator-assignment': 0,
		'operator-linebreak': [1, 'before'],
		'padded-blocks': 0,
		'quote-props': 0,
		'quotes': [1, 'single', 'avoid-escape'],
		'id-match': 0,
		'semi-spacing': [1, {'before': false, 'after': true}],
		'semi': [1, 'always'],
		'sort-vars': 0,
		'keyword-spacing': 1,
		'space-before-blocks': [1, 'always'],
		'space-before-function-paren': [1, 'always'],
		'space-in-parens': 0,
		'space-infix-ops': [1, {'int32Hint': true}],
		'space-unary-ops': [1, {'words': true, 'nonwords': false}],
		'spaced-comment': [1, 'always', {'markers': ['*']}],
		'wrap-regex': 0,
		'arrow-parens': 0,
		'arrow-spacing': [1, {'before': true, 'after': true}],
		'constructor-super': 2,
		'generator-star-spacing': 0,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-this-before-super': 2,
		'no-var': 1,
		'object-shorthand': 0,
		'prefer-const': 0,
		'prefer-spread': 1,
		'prefer-reflect': 0,
		'require-yield': 0,
		'max-depth': 0,
		'max-len': 0,
		'max-params': 0,
		'max-statements': 0,
		'no-bitwise': 0,
		'no-plusplus': 0,

		// react plugin
		'sort-prop-types': [1, {
			'ignoreCase': true,
			'requiredFirst': true
		}],
		'prefer-es6-class': [1, 'always']
	}
};
