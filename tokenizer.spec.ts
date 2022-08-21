import { test, expect } from 'vitest'
import { tokenizer, TokenTypes } from './tokenizer'

test('tokenizer', () => {
  const tokens = [
    { type: TokenTypes.Paren, value: '(' },
    { type: TokenTypes.Name, value: 'add' },
    { type: TokenTypes.Number, value: '2' },
    { type: TokenTypes.Paren, value: '(' },
    { type: TokenTypes.Name, value: 'subtract' },
    { type: TokenTypes.Number, value: '4' },
    { type: TokenTypes.Number, value: '2' },
    { type: TokenTypes.Paren, value: ')' },
    { type: TokenTypes.Paren, value: ')' },
  ]

  const code = '(add 2 (subtract 4 2))'
  expect(tokenizer(code)).toEqual(tokens)
})

test('paren', () => {
  const tokens = [
    {
      type: TokenTypes.Paren,
      value: '(',
    },
  ]
  const code = '('
  expect(tokenizer(code)).toEqual(tokens)
})

test('name', () => {
  const tokens = [
    {
      type: TokenTypes.Name,
      value: 'add',
    },
  ]
  const code = 'add'
  expect(tokenizer(code)).toEqual(tokens)
})

test('number', () => {
  const tokens = [
    {
      type: TokenTypes.Number,
      value: '22',
    },
  ]
  const code = '22'
  expect(tokenizer(code)).toEqual(tokens)
})
