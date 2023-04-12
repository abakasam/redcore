﻿import { expect } from 'chai'

import { Context } from '@parser/Context'
import { IToken, TokenCategory } from '@parser/interface/IToken'
import { Parser } from '@parser/Parser'
import { PreprocessEmitter } from '@parser/PreprocessEmitter'

'use strict'

describe('PreprocessEmitter', () => {
    it('Does not modify tokens if no labels are found which have been declared as EQUs', () => {
        const context = new Context()
        context.equs['SomeRandomLabel'] = [
            {
                category: TokenCategory.Maths,
                position: { line: 1, char: 1 },
                lexeme: '*'
            }
        ]

        const tokens: IToken[] = [
            {
                category: TokenCategory.Comma,
                position: { line: 1, char: 1 },
                lexeme: ','
            },
            {
                category: TokenCategory.Comment,
                position: { line: 1, char: 1 },
                lexeme: '; thsifdsakl dsj sdkljf s'
            },
            {
                category: TokenCategory.EOL,
                position: { line: 1, char: 1 },
                lexeme: '\n'
            },
            {
                category: TokenCategory.Label,
                position: { line: 1, char: 1 },
                lexeme: 'label123'
            },
            {
                category: TokenCategory.Maths,
                position: { line: 1, char: 1 },
                lexeme: '+'
            },
            {
                category: TokenCategory.Mode,
                position: { line: 1, char: 1 },
                lexeme: '#'
            },
            {
                category: TokenCategory.Modifier,
                position: { line: 1, char: 1 },
                lexeme: '.I'
            },
            {
                category: TokenCategory.Number,
                position: { line: 1, char: 1 },
                lexeme: '7'
            },
            {
                category: TokenCategory.Opcode,
                position: { line: 1, char: 1 },
                lexeme: 'MOV'
            },
            {
                category: TokenCategory.Unknown,
                position: { line: 1, char: 1 },
                lexeme: '.'
            }
        ]

        context.tokens = tokens

        const pass = new PreprocessEmitter()
        const actual = pass.process(context, Parser.DefaultOptions)

        expect(actual.tokens.length).to.be.equal(10)
        expect(actual.messages.length).to.be.equal(0)

        for (let i = 0; i < tokens.length; i++) {
            expect(tokens[i]).to.deep.equal(actual.tokens[i])
        }
    })

    it('Substitutes labels with their predefined EQU substitute', () => {
        const label1expression: IToken[] = [
            {
                category: TokenCategory.Number,
                lexeme: '1',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.Comma,
                lexeme: ',',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.Number,
                lexeme: '2',
                position: { line: 1, char: 1 }
            }
        ]

        const tokens: IToken[] = [
            {
                category: TokenCategory.Opcode,
                lexeme: 'ADD',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.Label,
                lexeme: 'label1',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.EOL,
                lexeme: '\n',
                position: { line: 1, char: 1 }
            }
        ]

        const context = new Context()
        context.equs['label1'] = label1expression.slice()
        context.tokens = tokens.slice()

        const pass = new PreprocessEmitter()
        const actual = pass.process(context, Parser.DefaultOptions)

        expect(actual.tokens.length).to.be.equal(5)

        expect(actual.tokens[0]).to.deep.equal(tokens[0])
        expect(actual.tokens[1]).to.deep.equal(label1expression[0])
        expect(actual.tokens[2]).to.deep.equal(label1expression[1])
        expect(actual.tokens[3]).to.deep.equal(label1expression[2])
        expect(actual.tokens[4]).to.deep.equal(tokens[2])
    })

    it('Is capable of making multiple substitutions', () => {
        const label1expression: IToken[] = [
            {
                category: TokenCategory.Number,
                lexeme: '1',
                position: { line: 1, char: 1 }
            }
        ]

        const label2expression: IToken[] = [
            {
                category: TokenCategory.Number,
                lexeme: '2',
                position: { line: 1, char: 1 }
            }
        ]

        const tokens: IToken[] = [
            {
                category: TokenCategory.Label,
                lexeme: 'label2',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.Label,
                lexeme: 'label1',
                position: { line: 1, char: 1 }
            },
            {
                category: TokenCategory.Label,
                lexeme: 'label1',
                position: { line: 1, char: 1 }
            }
        ]

        const context = new Context()
        context.equs['label1'] = label1expression.slice()
        context.equs['label2'] = label2expression.slice()
        context.tokens = tokens.slice()

        const pass = new PreprocessEmitter()
        const actual = pass.process(context, Parser.DefaultOptions)

        expect(actual.tokens.length).to.be.equal(3)

        expect(actual.tokens[0]).to.deep.equal(label2expression[0])
        expect(actual.tokens[1]).to.deep.equal(label1expression[0])
        expect(actual.tokens[2]).to.deep.equal(label1expression[0])
    })

    it('Updates the position of substituted tokens to match position of label that was replaced', () => {
        const label1expression: IToken[] = [
            {
                category: TokenCategory.Number,
                lexeme: '1',
                position: { line: 1, char: 4 }
            },
            {
                category: TokenCategory.Opcode,
                lexeme: 'MOV',
                position: { line: 1, char: 5 }
            }
        ]

        const label2expression: IToken[] = [
            {
                category: TokenCategory.Number,
                lexeme: '2',
                position: { line: 2, char: 4 }
            }
        ]

        const tokens: IToken[] = [
            {
                category: TokenCategory.Label,
                lexeme: 'label2',
                position: { line: 3, char: 4 }
            },
            {
                category: TokenCategory.Label,
                lexeme: 'label1',
                position: { line: 5, char: 5 }
            },
            {
                category: TokenCategory.Label,
                lexeme: 'label1',
                position: { line: 6, char: 4 }
            }
        ]

        const context = new Context()
        context.equs['label1'] = label1expression.slice()
        context.equs['label2'] = label2expression.slice()
        context.tokens = tokens.slice()

        const pass = new PreprocessEmitter()
        const actual = pass.process(context, Parser.DefaultOptions)

        expect(actual.tokens.length).to.be.equal(5)

        expect(actual.tokens[0].position).to.deep.equal({ line: 3, char: 4 })

        expect(actual.tokens[1].position).to.deep.equal({ line: 5, char: 5 })
        expect(actual.tokens[2].position).to.deep.equal({ line: 5, char: 5 })

        expect(actual.tokens[3].position).to.deep.equal({ line: 6, char: 4 })
        expect(actual.tokens[4].position).to.deep.equal({ line: 6, char: 4 })
    })
})
