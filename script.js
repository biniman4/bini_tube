 document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        // Get the values from the input and textarea
        var email = document.getElementById('bin').value;
        var message = document.getElementById('message').value;

        // Do something with the values, for example, log them to the console
        console.log('Email:', email);
        console.log('Message:', message);

        // You can also send the data to a server using AJAX or any other method here

        // Clear the form if needed
        document.getElementById('bin').value = '';
        document.getElementById('message').value = '';
      
    });
