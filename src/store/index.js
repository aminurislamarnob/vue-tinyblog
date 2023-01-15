import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
          user: {}
        }
    },
    getters: {
        getLoggedInUser(state) {
          return state.user;
        },
        isLoggedIn(state) {
            if (Object.keys(state.user).length === 0) {
              return false;
            }
            return true;
        },
    },
    mutations: {
        setLoggedInUser(state, userInfo) {
            state.user = userInfo;
        }
    },
    actions: {
        SET_LOGGED_IN_USER(context, userInfo) {
            context.commit('setLoggedInUser', userInfo);
        }
    }
});