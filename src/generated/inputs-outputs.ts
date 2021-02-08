// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * Contents of a Certificate Authority (.crt) file for your cluster's SSL certificate. Store in a secret.
     * Required: false
     * Default: None.
     */
    CERTIFICATE_AUTHORITY_DATA = "certificate_authority_data",
    /**
     * Skip TLS certificate verification when connecting to the cluster.
     * Required: false
     * Default: "false"
     */
    INSECURE_SKIP_TLS_VERIFY = "insecure_skip_tls_verify",
    /**
     * Set current context's namespace to this, after logging in.
     * Required: false
     * Default: None.
     */
    NAMESPACE = "namespace",
    /**
     * Openshift Password. Store in a secret. Must be used with openshift_username.
     * Required: false
     * Default: None.
     */
    OPENSHIFT_PASSWORD = "openshift_password",
    /**
     * Openshift Server URL.
     * Required: true
     * Default: None.
     */
    OPENSHIFT_SERVER_URL = "openshift_server_url",
    /**
     * Openshift Bearer Token. Store in a secret.
     * Required: false
     * Default: None.
     */
    OPENSHIFT_TOKEN = "openshift_token",
    /**
     * Openshift Username. Must be used with openshift_password.
     * Required: false
     * Default: None.
     */
    OPENSHIFT_USERNAME = "openshift_username",
    /**
     * "By default, the cluster name is masked, since it can be used to derive the server URL.
     * Set this to true to skip masking the cluster name."
     * Required: false
     * Default: "false"
     */
    REVEAL_CLUSTER_NAME = "reveal_cluster_name",
}

export enum Outputs {
}
