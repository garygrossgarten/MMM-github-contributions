Module.register("MMM-github-contributions", {
  // Override dom generator.
  getDom: function() {
    const element = document.createElement("github-contributions");
    element.username = this.config.username;
    return element;
  },
  getScripts: function() {
    return [
      this.file("dist/github-contributions.js")
    ];
  }
});
