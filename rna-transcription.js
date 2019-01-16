export function toRna(dna) {
    var rna_map = {"C": "G", "G": "C", "A": "U", "T": "A", "": ""}
    return rna_map[dna]
}
