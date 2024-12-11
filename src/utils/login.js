
const authServerURL = "https://dev-i0q8gya6f645slv1.eu.auth0.com";
const clientId = "A0vfnZdjpXPunkEghuBUazgJhCyPsR6W";

async function redirectToLogin() {


    
    const redirectUri = encodeURIComponent(getLocalServerAddress() +  "/callback");
    const scope = encodeURIComponent("openid profile email");
    const responseType = "code"; // eller "id_token token" for implicit flow
    console.log('Address: ' + getLocalServerAddress());
    const state = encodeURIComponent(generateRandomState());
    const nonce = encodeURIComponent(generateRandomNonce());

    const codeVerifier = generateRandomString(128); // Maks 128 tegn
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Lagre PKCE-verifier og andre nødvendige verdier i sessionStorage
    sessionStorage.setItem("pkce_code_verifier", codeVerifier);
    sessionStorage.setItem("oidc_state", state);
    sessionStorage.setItem("oidc_nonce", nonce);

    const authorizationEndpoint = authServerURL + "/authorize";

    const loginUrl = `${authorizationEndpoint}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&nonce=${nonce}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    console.log('Login url: ' + loginUrl);
    window.location.href = loginUrl;
}

function logout() {
    const logoutEndpoint = authServerURL + "/oidc/logout";
    localStorage.clear();
    
    window.location.href = logoutEndpoint;
}

function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    let result = "";
    const values = new Uint8Array(length);
    window.crypto.getRandomValues(values);
    for (let i = 0; i < values.length; i++) {
        result += charset[values[i] % charset.length];
    }
    return result;
}

// Generer SHA256 hash og Base64URL-encode for PKCE challenge
async function generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hash = await window.crypto.subtle.digest("SHA-256", data);
    return base64UrlEncode(hash);
}

// Konverter til Base64URL-format
function base64UrlEncode(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    return btoa(String.fromCharCode(...bytes))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

// Generer state og nonce som tidligere
function generateRandomState() {
    return generateRandomString(16); // Kan bruke samme funksjon som for PKCE
}

function generateRandomNonce() {
    return generateRandomString(16);
}

async function exchangeCodeForTokens(authorizationCode) {
    const tokenEndpoint = authServerURL + "/oauth/token";
    const codeVerifier = sessionStorage.getItem("pkce_code_verifier");

    const body = new URLSearchParams();
    body.append("grant_type", "authorization_code");
    body.append("client_id", clientId);
    body.append("code", authorizationCode);
    body.append("redirect_uri", getLocalServerAddress() + "/callback");
    body.append("code_verifier", codeVerifier);

    const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
    });

    if (!response.ok) {
        throw new Error("Failed to exchange authorization code for tokens");
    }

    const tokens = await response.json();
    console.log("Tokens:", tokens);
    return tokens;
}

function getLocalServerAddress() {
    const protocol = window.location.protocol; // http: eller https:
    const hostname = window.location.hostname; // Lokal IP eller vertsnavn
    const port = window.location.port; // Portnummer

    // Sett sammen full adresse
    const serverAddress = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
    return serverAddress;
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Invalid JWT:", e);
        return null;
    }
}

function getUserInfo() {
    const idToken = localStorage.getItem("id_token");
    if (idToken) {
        const decodedToken = parseJwt(idToken);
        console.log("User Info:", decodedToken);
        return decodedToken;
    }
    return null;
}


export {redirectToLogin, logout, exchangeCodeForTokens, parseJwt, getUserInfo};