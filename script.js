document.getElementById('specialButton').addEventListener('click', function() {
    const cake = document.getElementById('cake');
    const birthdaySound = document.getElementById('birthdaySound');
    const specialMessage = document.getElementById('specialMessage');

    // Show the cake and play the sound
    cake.classList.remove('hidden');
    birthdaySound.play();
    

    // After 3 seconds, hide the cake and show the message
    setTimeout(() => {
        cake.classList.add('hidden');
        specialMessage.classList.remove('hidden');
    }, 3000); // 3 seconds delay
});