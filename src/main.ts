import './style.css'


document.querySelector('button')?.addEventListener('click', () => {
    navigator.permissions
        .query({name: "geolocation"})
        .then(status => {
            console.log(status);
            navigator.geolocation.getCurrentPosition(
                (pos) => console.log({pos}),
                (err) => console.log({err})
            )
        });
});
