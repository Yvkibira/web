document.addEventListener("DOMContentLoaded", function(event) {
	var biometricsButton = document.getElementById("biometrics");
	var nameInput = document.getElementById("name");
	var emailInput = document.getElementById("email");
	var registrationForm = document.getElementById("registration-form");

	biometricsButton.addEventListener("click", function(event) {
		event.preventDefault();

		// check if the browser supports WebAuthn
		if (!window.PublicKeyCredential) {
			document.getElementById("message").innerHTML = "WebAuthn is not supported in this browser.";
			return;
		}

		// create a new credential request
		var publicKey = {
			challenge: new Uint8Array(32),
			pubKeyCredParams: [{type: "public-key", alg: -7}]
		};

		// make a fetch request to the server to create a new user
		fetch("/register", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({name: nameInput.value, email: emailInput.value, publicKey: publicKey})
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			// display a message to enroll the fingerprint
			document.getElementById("message").innerHTML = "Enroll your fingerprint on your device.";

			// create a new credential
			navigator.credentials.create({publicKey: response})
			.then(function(credential) {
				// make a fetch request to the server to save the credential
				fetch("/save-credential", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({name: nameInput.value, email: emailInput.value, credential: credential})
				})
				.then(function(response) {
					return response.json();
				})
				.then(function(response) {
					// display a message to confirm the registration
					document.getElementById("message").innerHTML = response.message;
				})
				.catch(function(error) {
					// display an error message if the credential cannot be saved
					document.getElementById("message").innerHTML = "Error saving the credential.";
				});
			})
			.catch(function(error) {
				// display an error message if the credential cannot be created
				document.getElementById("message").innerHTML = "Error creating the credential.";
			});
		})
		.catch(function(error) {
			// display an error message if the user cannot be registered
			document.getElementById("message").innerHTML = "Error registering the user.";
		});
	});

	registrationForm.addEventListener("submit", function(event) {
		event.preventDefault();

		// submit the registration form
		document.getElementById("message").innerHTML = "Submitting the registration form...";
		registrationForm.submit();
	});
});
