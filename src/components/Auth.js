import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-jlct10i9.auth0.com",
    clientID: "vpkVGSkkhtKFZwRB9v0kwnBhZPaOQ9qg",
    redirectUri: "https://todo-app-hasura.herokuapp.com/auth",
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(window.atob(base64));
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        const decoded = this.parseJwt(authResult.idToken);
        const email = decoded.email;
        this.setSession(authResult, email);
      } else if (err) {
        window.location.href = "/";
        alert(`Error: ${err.error}. Check the console for details.`);
      }
    });
  };

  setSession(authResult, email) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("Auth0->access_token", authResult.accessToken);
    localStorage.setItem("Auth0->id_token", authResult.idToken);
    localStorage.setItem("Auth0->expires_at", expiresAt);
    localStorage.setItem("Auth0->email", email);
    window.location.href = "/";
  }

  logout() {
    localStorage.removeItem("Auth0->access_token");
    localStorage.removeItem("Auth0->id_token");
    localStorage.removeItem("Auth0->expires_at");
    localStorage.removeItem("Auth0->email");
    window.location.href = "/";
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("Auth0->expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
