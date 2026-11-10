
/* LIVE DATE AND TIME */

function updatePassDateTime() {
  const now = new Date();

  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  document.querySelector('.pass-date').textContent =
    now.toLocaleDateString('en-CA', dateOptions);

  document.querySelector('.pass-time').textContent =
    now.toLocaleTimeString('en-CA', timeOptions);
}

// Update immediately
updatePassDateTime();

// Update every second
setInterval(updatePassDateTime, 1000);


/* VIDEO PLAYBACK */

const busVideo = document.getElementById('busVideo');

if (busVideo) {

  // Start video at 2 seconds
  busVideo.addEventListener('loadedmetadata', function () {
    busVideo.currentTime = 2;
  });

  // Restart at 2 seconds instead of 0 when looping
  busVideo.addEventListener('ended', function () {
    busVideo.currentTime = 2;
    busVideo.play();
  });

  // Attempt autoplay
  busVideo.play().catch(function (error) {
    console.log('Autoplay requires user interaction:', error);
  });

}
