import './style.css'

function append(object: unknown) {
    console.log(object);
    const pre = document.querySelector('pre') as HTMLElement;
    pre.innerHTML += '\n\n' + JSON.stringify(object);
}

document.querySelector('button')?.addEventListener('click', () => {
    navigator.permissions
        .query({name: "geolocation"})
        .then(status => {
            append({name: status.name, state: status.state});
            navigator.geolocation.getCurrentPosition(
                ({coords, timestamp}) => append({coords, timestamp}),
                ({message, code}) => append({error: {message, code}})
            )
        });
});
