import { describe, expect, it } from 'vitest';
import { range } from './utils';

// Teste 1, verifica se o valor é o mesmo d equivalente testado ...
// describe('utils', () => {
//     it('checks that 1 equals 1', () => {
//         expect(1).toEqual(1);
//     })
// })

// Teste 2, testa o retorno e saída de uma função ...
describe('utils', () => {
    describe("range", () => {
        it("return correct result from 1-6 range", () => {
            const result = range(1, 6);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });
    })
})