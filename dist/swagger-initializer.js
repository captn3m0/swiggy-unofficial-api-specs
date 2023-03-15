window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  let url;
  if (window.location.hash) {
    url = window.location.hash.substr(2)
  } else {
    url = "reference/profile.yaml"
  }
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
