
export const getLoginStatus = () => {

    const getUser = JSON.parse(localStorage.getItem('isLogin'));

    let loginStatus = false;
    if (getUser) {
        try {
            loginStatus = true;
        } catch (err) {
            // 👇️ SyntaxError: Unexpected end of JSON input
        }
    }

    return loginStatus;
}