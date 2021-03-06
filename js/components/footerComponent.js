export default {

    template: `
    <footer>
    <ul>
        <li>CONTACT
            <a>How do I register?</a>
            <a>How do I log in?</a>
        </li>

        <li>FAQS
            <a>How do I register?</a>
            <a>How do I log in?</a>
        </li> 

        <li>HEALTH CARE MEMBERS
            <a>Jack Nathan Health</a>
            <a>Sunnybrook Health Sciences Centre</a>
        </li>
    </ul>
</footer>
    `,


    data() {
        return {
            input: {
                country: "",
                firstname: "",
                lastname: "",
                email: ""
            }
        }
    },


    methods: {
        signup() {
            console.log('attempting to sign up');

            if (this.input.country != "" && this.input.firstname != "" && this.input.lastname != "" && this.input.email != "") {
                //fetch the data from the server and match passwords
                let url = `./admin/sign-up.php`;

                const formData = new FormData();

                formData.append("country", this.input.country);
                formData.append("firstname", this.input.firstname);
                formData.append("lastname", this.input.username);
                formData.append("email", this.input.email);

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data == "Signup Failed") {
                            console.log('login attempt failed');
                            return;
                        } else {
                            
                        }

                    })
                .catch(function(error) {
                    console.log(error);
                })

            } else {
                console.log('blank forms');
            }
        }
    }

    //End of Export Default
}

