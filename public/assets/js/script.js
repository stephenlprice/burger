document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize BootStrap tooltips (Popper)
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  console.log(tooltipTriggerList);

  // var exampleEl = document.getElementById('example')
  // var tooltip = new bootstrap.Tooltip(exampleEl, options)

    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE (eat/uneat the burger)
    const eatUneat = document.querySelectorAll('span.change-devoured i');
    const burger = document.querySelectorAll('div.hamburger i');
  
    if (eatUneat) {
      eatUneat.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          let newEat = e.target.getAttribute('data-devoured');
          console.log(newEat);
          switch (newEat) {
            case true:
              newEat = false;
              break;
            
            case false:
              newEat = true;
              break;
          }
  
          const state = {
            devoured: newEat,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            // Serializing the JSON body
            body: JSON.stringify(state),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed devoured for: ${newEat}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }

    if (burger) {
      burger.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          let newEat = e.target.getAttribute('data-devoured');
          console.log(newEat);
          switch (newEat) {
            case true:
              newEat = false;
              break;
            
            case false:
              newEat = true;
              break;
          }
  
          const state = {
            devoured: newEat,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            // Serializing the JSON body
            body: JSON.stringify(state),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed devoured for: ${newEat}`);
              location.reload('');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const addBurger = document.getElementById('add');
  
    if (addBurger) {
      console.log(addBurger);
      addBurger.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('burgerName').value.trim();
        const devoured = document.getElementById('devoured-check').checked;
        console.log(name, devoured);

        const newBurger = {
          name: name,
          devoured: devoured,
        };
  
        // New hamburger
        fetch('/api/burgers/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // Serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burgerName').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Added a new hamburger!');
          location.reload('');
        });
      });
    }
});