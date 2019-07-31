export default class CategoryService{
	constructor(){
		this.categories = [
			{val: '', desc: '--- Select a category ---'},
			{val: 'acc', desc: 'MIBiG accession'},
			{val: 'type', desc: 'BGC type',},
			{val: 'compound', desc: 'Compound name',},
//			{val: 'minimal', desc: 'Entries with minimal annotations', category: 'Quality filters'},
			{val: 'species', desc: 'Species', category: 'Taxonomy'},
			{val: 'genus', desc: 'Genus', category: 'Taxonomy'},
			{val: 'family', desc: 'Family', category: 'Taxonomy'},
			{val: 'order', desc: 'Order', category: 'Taxonomy'},
			{val: 'class', desc: 'Class', category: 'Taxonomy'},
			{val: 'phylum', desc: 'Phylum', category: 'Taxonomy'},
			{val: 'superkingdom', desc: 'Superkingdom', category: 'Taxonomy'},
		];
	};
}
