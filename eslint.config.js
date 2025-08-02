import rocketseatConfig from '@rocketseat/eslint-config'

export default [
	...rocketseatConfig,
	{
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/jsx-indent': ['error', 'tab'], // Permite tabs no JSX
			'@stylistic/jsx-indent-props': ['error', 'tab'], // Permite tabs nas props JSX
			'@stylistic/quotes': 'off', // Permite aspas simples ou duplas
			'@stylistic/max-len': ['warn', { code: 110 }], // Aumenta limite para 110 caracteres
			'@typescript-eslint/no-empty-object-type': 'off', // Permite interfaces vazias
		},
	},
]
