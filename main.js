const intro = introJs();

intro.setOptions({
  steps: [
    {
      element: '#introduction',
      intro: 'Welcome to our new website! Lets take a tour!'
    },
    {
      element: '#step-one',
      intro: 'Please read this! Its very important!'
    },
    {
      element: '#step-two',
      intro: 'You can contact us here!'
    },
    {
      element: '#step-three',
      intro: 'Neviem čo tu mam napísať!'
    },
  ]
})

document.querySelector('.start_steps').addEventListener('click', function(){
  intro.start();
})

intro.start();