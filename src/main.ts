import './style.css'

function append(object: unknown) {
    const pre = document.querySelector('pre') as HTMLElement;
    pre.innerHTML += '\n\n' + JSON.stringify(object);
}

document.querySelector('button')?.addEventListener('click', () => {
    navigator.permissions
        .query({name: "geolocation"})
        .then(status => {
            append({status});
            navigator.geolocation.getCurrentPosition(
                (pos) => append({pos}),
                (err) => append({err})
            )
        });
});
