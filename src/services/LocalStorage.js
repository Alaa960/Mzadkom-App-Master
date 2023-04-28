const Token = "token";
const User = "user";
export const SetToken = (token) => {
    return localStorage.setItem(Token, token.token);
}
export const getTokens = () => {
    return localStorage.getItem(Token)
}
export const removeTokens = () => {
    return localStorage.removeItem(Token)
}
export const SetUser = (user) => {
    return localStorage.setItem(User, user.user.user_id)
}
export const getUser = () => {
    return localStorage.getItem(User)
}