// Create account
class AccountCreator {
    constructor() {
        this.elements = {
            meta: document.querySelector('#auth_menu_create_account'),
            create_account: document.querySelector('#create_account'),
            username: document.querySelector('#create_username'),
            password: document.querySelector('#create_password'),
            password_confirm: document.querySelector('#create_password_confirm')
        }

        // function is called by the html element -> createAccount is no longer bound to 'this'
        this.elements.create_account.addEventListener('click', this.createAccount.bind(this)); 
    }

    getCredentials() {
        const username = this.elements.username.value;
        const password = this.elements.password.value;

        // Validate username and password
        // implement later

        return {username: username, password: password};
    }

    showMessage(message) {
        // clear meta
        this.elements.meta.innerHTML = '';

        // Add message
        const ele_message = document.createElement('p');
        ele_message.innerText = message;
        ele_message.classList.add('message');

        this.elements.meta.append(ele_message);
    }

    async createAccount() {
        const { username, password } = this.getCredentials();

        try {
            // returns promise
            const response = await fetch('/api/users/create_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            // await promise fulfillment
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}, details: ${data.message}`);
            }

            this.showMessage(data.message);

        } catch (err) {
            console.error(err);
        }
    }
}

export default AccountCreator;