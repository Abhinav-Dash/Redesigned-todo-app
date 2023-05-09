
alert('Welcome to my website ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️')
alert('If ther is anything you can think that can be improved in the website you can provide your review on my email abhinavdash05@gmail.com. Your review will be appreciated. Once again thank you for visiting my website ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️')


document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');
    var doubtTabLink = document.getElementById('doubtTabLink');
    var doubtTab = document.getElementById('doubtTab');
    var doubtInput = document.getElementById('doubtInput');
    var submitDoubtBtn = document.getElementById('submitDoubtBtn');
    var doubtResponse = document.getElementById('doubtResponse');
  
    addTaskBtn.addEventListener('click', function() {
      var taskText = taskInput.value;
      if (taskText.trim() !== '') {
        var listItem = document.createElement('li');
        var taskSpan = document.createElement('span');
        var deleteBtn = document.createElement('button');
  
        taskSpan.textContent = taskText;
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
  
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
  
        taskInput.value = '';
  
        deleteBtn.addEventListener('click', function() {
          listItem.remove();
        });
  
        listItem.addEventListener('click', function() {
          listItem.classList.toggle('completed');
        });
      }
    });
  
    doubtTabLink.addEventListener('click', function(event) {
      event.preventDefault();
      toggleTab('doubtTab');
    });
  
    submitDoubtBtn.addEventListener('click', function() {
      var doubtText = doubtInput.value;
      if (doubtText.trim() !== '') {
        solveDoubt(doubtText);
      }
    });
  
    function toggleTab(tabId) {
      var tabs = document.getElementsByClassName('tab');
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('hidden');
      }
  
      document.getElementById(tabId).classList.remove('hidden');
    }
  
    function solveDoubt(doubtText) {
      // Make API call to GPT-3 with the doubtText
      // Replace 'YOUR_API_KEY' with your actual API key
      fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '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'
        },
        body: JSON.stringify({
          prompt: doubtText,
          max_tokens: 50
        })
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var responseText = data.choices[0].text;
        doubtResponse.textContent = responseText;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
    }
  });
  