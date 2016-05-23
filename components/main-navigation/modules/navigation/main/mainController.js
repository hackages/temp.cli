function MainController() {
  this.getNavigation = () => {
    return [
      {"label": "Dashboard", "url": "#"},
      {"label": "Rekeningen &amp; kaarten", "url": "#"},
      {"label": "Betalen", "url": "#"},
      {"label": "Berichten &amp; documenten", "url": "#"},
      {"label": "Beleggen", "url": "#"},
      {"label": "Kredieten", "url": "#"},
      {"label": "Verzekeringen", "url": "#"}
    ];
  }
}

export default MainController;
