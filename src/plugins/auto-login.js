export default {
    install(Vue, options) {
        Vue.mixin({
        created() {
            const tokenString = localStorage.getItem("token");
            if (tokenString) {
                const token = JSON.parse(tokenString);
                this.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                // Fetch user profile info
                this.axios.get("/wp/v2/users/me").then((userResponse) => {
                    if (userResponse.status === 200) {
                        const userInfo = {
                            token: token,
                            profile: userResponse.data
                        }
                        this.$store.dispatch("SET_LOGGED_IN_USER", userInfo);// save user info to vuex
                    } else {
                        throw new Error("Login failed.");
                    }
                });
            }
        },
        });
    }
};  