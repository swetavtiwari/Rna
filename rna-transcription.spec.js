import {toRna} from './rna-transcription.js';

describe('Transcriptor', () => {
    test('empty rna sequence', () => {
        expect(toRna('')).toEqual('');
    });
});
