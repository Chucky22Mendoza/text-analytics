const EMOJI = {
    sad: '😭',
    neutral: '😐',
    happy: '😃',
};

new Vue({
    el: '#app',
    data: {
        comments: [],
        enterKey: 13,
    },
    methods: {
        postComment(event) {
            const { value: comment } = event.target;

            if (event.keyCode === this.enterKey) {
                event.target.value = '';
                axios
                    .post('/comment', { comment })
                    .then(({ data }) => {
                        const mood =
                            data === 'positive'
                            ? EMOJI.happy
                            : data === 'neutral'
                            ? EMOJI.neutral
                            : EMOJI.sad

                        this.comments.push({
                            comment,
                            mood,
                        });
                    })
                    .catch(console.log);
            }
        },
    },
});