class Entry{
  constructor() {
    this.tags = [];
  };

  fromJSON(data) {
    this.accession = data.accession;
    this.complete = data.complete;
    this.minimal = data.minimal;
    this.product = data.products.join(', ');
    data.classes.forEach((tag) => {
      this.tags.push(new Tag(tag.name, tag.css_class));
    });
    this.organism = data.organism;
    // Make chainable
    return this;
  };

  completenessIcon() {
    switch(this.complete) {
      case "complete":
        return "fa-circle";
      case "incomplete":
        return "fa-circle-o";
      default:
        return "fa-question";
    }
  };
}

class Tag{
  constructor(name, css_class) {
    this.name = name;
    this.css_class = css_class;
  };
}

export default class RepositoryService{
  constructor($http){
    this.$http = $http;
    this.entries = [];

    $http.get("/api/v1/repository").then((response) => {
      response.data.forEach((entry) => {
        this.entries.push(new Entry().fromJSON(entry))
      });
    });
  };

  getEntries() {
    return this.entries;
  }

}

RepositoryService.$inject = ['$http'];
