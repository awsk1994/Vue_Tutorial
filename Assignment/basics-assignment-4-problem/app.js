const app = Vue.createApp({
    data() {        // Variables that Vue should be aware of
        return {
            inputText: "",
            show: true,
            bgColor: "white",
        }
    },
    computed: {
        paraClass() {
            return {
                user1: this.inputText === 'user1',
                user2: this.inputText === 'user2',
                visible: this.show,
                hidden: !this.show,
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.show = !this.show;
        }
    }
});
app.mount("#assignment");       // Mounts the created Vue App to a div (with id = app)