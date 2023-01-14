export default class Sensors {

    async ask(name: PermissionName): Promise<boolean> {
        const status = await navigator.permissions.query({name});
        console.log('ask', {status});
        switch (status.state) {
            case 'denied':
                return false;
            case 'granted':
                return true;
            case 'prompt':
                return false;
        }
    }
}
