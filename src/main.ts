import './style.css'

type V = number | undefined;

function append(x: V, y: V, z: V) {
    const pre = document.querySelector('pre') as HTMLElement;
    pre.innerHTML = `x = ${x}\ny = ${y}\nz = ${z}`;
}

document.querySelector('button')?.addEventListener('click', () => {
    // @ts-ignore
    navigator.permissions.query({name: "accelerometer"})
        .then(() => {
            const acc = new Accelerometer({frequency: 60});
            acc.addEventListener('reading', () => {
                const {x, y, z} = acc;
                append(x, y, z);
            });
        });
});
