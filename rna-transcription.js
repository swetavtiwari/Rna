export function toRna(dna) {
    var rna = "";
    const rna_map = {"C": "G", "G": "C", "A": "U", "T": "A", "": ""};
    for (var i = 0; i < dna.length; i++) {
        rna += rna_map[dna.charAt(i)];
    }
    return rna
}
