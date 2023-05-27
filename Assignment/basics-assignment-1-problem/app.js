const app = Vue.createApp({
    data() {        // Variables that Vue should be aware of
        return {
            name: "Alex Wong",
            age: 29,
            imageUrl: "https://www.shutterstock.com/image-vector/cute-pig-illustration-kawaii-chibi-260nw-2291790391.jpg",
            defaultInputText: "DEFAULT INPUT",
        }
    },
    methods: {
        randomNum() {
            return Math.random();
        }
    }
});
app.mount("#assignment");       // Mounts the created Vue App to a div (with id = app)