const Token = "token";
export const SetToken = (token) => {
    return localStorage.setItem(Token, token.token);
}
export const getTokens = () => {
    return localStorage.getItem(Token)
}
export const removeTokens = () => {
    return localStorage.removeItem(Token)
}