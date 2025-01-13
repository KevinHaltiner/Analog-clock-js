const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
      const now = new Date(); // get current time

      // Set Seconds
      const seconds = now.getSeconds();
      const secondsDeg = ((seconds / 60) * 360) + 90; // get angle
      secondHand.style.transform = `rotate(${secondsDeg}deg)`;

      // Set Minutes
      const mins = now.getMinutes();
      const minsDeg = ((mins / 60) * 360) + ((seconds/60)*6) + 90; // get angle
      minsHand.style.transform = `rotate(${minsDeg}deg)`;
      
      // Set Hour
      const hour = now.getHours();
      const hourDeg = ((hour / 12) * 360) + ((mins/60)*30) + 90; // get angle
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }
    setInterval(setDate, 1000); // update every sekunded
    setDate();
