// This is the default configuration for the dev mode of the web console.
// A generated version of this config is created at run-time when running
// the web console from the openshift binary.
//
// To change configuration for local development, copy this file to
// assets/app/config.local.js and edit the copy.

var CLUSTER_IP = "192.168.67.2";
var API_DOMAIN = ".nip.io";

window.OPENSHIFT_CONFIG = {
  apis: {
    hostPort: CLUSTER_IP + ":8443",
    prefix: "/apis"
  },
  api: {
    openshift: {
      hostPort: CLUSTER_IP + ":8443",
      prefix: "/oapi"
    },
    k8s: {
      hostPort: CLUSTER_IP + ":8443",
      prefix: "/api"
    }
  },
  additionalServers: [{
    protocol: "https",
    hostPort: "apiserver-service-catalog." + CLUSTER_IP + API_DOMAIN,
    prefix: "/apis"
  }],
  auth: {
    oauth_authorize_uri: "https://" + CLUSTER_IP + ":8443/oauth/authorize",
    oauth_redirect_base: "https://localhost:9000/dev-console",
    oauth_client_id: "openshift-web-console",
    logout_uri: ""
  },
  loggingURL: "",
  metricsURL: ""
};

window.OPENSHIFT_VERSION = {
  openshift: "dev-mode",
  kubernetes: "dev-mode"
};
