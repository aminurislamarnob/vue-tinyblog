export default {
    install(Vue, options) {
        Vue.mixin({
            created() {
                // Check auth error on ssr
                this.axios.interceptors.response.use(
                    function (response) {
                        return response;
                    },
                    function (error) {
                        if (error.response.status === 401) {
                            // Logout
                            localStorage.removeItem("token");
                            location.reload();
                        }
                        return Promise.reject(error);
                    }
                );
            },
        });
    }
};  