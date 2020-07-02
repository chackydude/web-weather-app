export default {
    actions: {
        dateBuilder (context) {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            const currentDate = `${day} ${date} ${month}`;

            context.commit('setDate', currentDate)
        }
    },
    mutations: {
        setDate(state, date) {
            state.date = date;
        }
    },
    state: {
        date: ''
    },
    getters: {
        getDate(state) {
            return state.date
        }
    },
}