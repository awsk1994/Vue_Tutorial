const app = Vue.createApp({
    data() {        // Variables that Vue should be aware of
        return {
            total: 0,
        }
    },
    watch: {
        total() {
            const that = this;
            setTimeout(function() {
                that.total = 0;
            }, 5000);
        }
    },
    computed: {
        showmsg() {
            if(this.total < 37) {
                return "Not there yet";
            } else if (this.total > 37) {
                return "Too much!";
            } else {
                return "Reached!";
            }
        }
    },
    methods: {
        addNum(n) {
            this.total += n
        },
    }
});
app.mount("#assignment");       // Mounts the created Vue App to a div (with id = app)