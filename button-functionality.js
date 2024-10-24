const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

// Default Color
donationBtn.classList.add('bg-btn-green');
historyBtn.classList.add('bg-white', 'text-gray-500', 'border-1', 'border-gray-300', 'border-solid');

// Event for history button
historyBtn.addEventListener('click', function() {
  donationBtn.classList.remove('bg-btn-green');
  donationBtn.classList.add('bg-white', 'text-gray-500', 'border-1', 'border-gray-300', 'border-solid');

  historyBtn.classList.remove('bg-white', 'text-gray-500', 'border-1', 'border-gray-300', 'border-solid');
  historyBtn.classList.add('bg-btn-green');
});

// Event for donation button
donationBtn.addEventListener('click', function() {
  historyBtn.classList.remove('bg-btn-green');
  historyBtn.classList.add('bg-white', 'text-gray-500', 'border-1', 'border-gray-300', 'border-solid');

  donationBtn.classList.remove('bg-white', 'text-gray-500', 'border-1', 'border-gray-300', 'border-solid');
  donationBtn.classList.add('bg-btn-green');
});


// Hiding Section on Button click
historyBtn.addEventListener('click', function() {
  document.getElementById('history-section').classList.remove('hidden')
  document.getElementById('donation-section').classList.add('hidden')
})

donationBtn.addEventListener('click', function() {
  document.getElementById('donation-section').classList.remove('hidden')
  document.getElementById('history-section').classList.add('hidden')
})