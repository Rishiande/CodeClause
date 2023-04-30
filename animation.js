// get the clouds elements
const clouds = document.querySelectorAll('.cloud');

// animate each cloud
clouds.forEach((cloud) => {
  // get a random duration between 10 and 20 seconds
  const duration = Math.floor(Math.random() * 10 + 10);

  // set the animation style
  cloud.style.animation = `cloud-move linear ${duration}s infinite`;

  // set a random delay between 0 and 10 seconds
  const delay = Math.floor(Math.random() * 10);

  // add the delay to the animation
  cloud.style.animationDelay = `${delay}s`;
});
