Vue.createApp({
    data() {        // Variables that Vue should be aware of
        return {
            enteredText: "",
            goals: [],
        }
    },
    methods: {
        addGoal() {
            if(this.enteredText == "") {
                return
            }
            this.goals.push(this.enteredText);
            this.enteredText = "";
        }
    }
}).mount("#app");       // Mounts the created Vue App to a div (with id = app)