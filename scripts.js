// Write your JavaScript code here.
// Remember to pay attention to page loading!

//load event
window.addEventListener("load", function(){
    let flightStatus = document.getElementById('flightStatus');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleBackground = document.getElementById('shuttleBackground');

    let rocket = document.getElementById('rocket');

//action buttons
    let takeoffButton = this.document.getElementById('takeoff');
    let landingButton = this.document.getElementById('landing');
    let missionAbortButton = this.document.getElementById('missionAbort');
    
   //takeoff button is clicked
    takeoffButton.addEventListener('click', () =>{
        let response = window.confirm('Confirm that the shuttle is ready for takeoff ');
        if (response){
            flightStatus.innerText = "Shuttle in flight";
            let currentHeight = Number(spaceShuttleHeight.innerText);
            spaceShuttleHeight.innerText = currentHeight + 10000;
            shuttleBackground.style.backgroundColor = "blue";
        }
    });

    //land button is clicked
    landingButton.addEventListener('click', () =>{
        window.alert('The shuttle is landing. Landing gear engaged');
        flightStatus.innerText = "The shuttle has landed.";
        spaceShuttleHeight.innerText=0;
        shuttleBackground.style.backgroundColor = "green";
    });

    //abort mission button is clicked
    missionAbortButton.addEventListener('click', () =>{
     let response = window.confirm('Confirm that you want to abort the mission.');
     if (response){
         flightStatus.innerText = "Mission aborted.";
         spaceShuttleHeight.innerText = 0;
         shuttleBackground.style.backgroundColor = "green";
     }   
    });

    //buttons that move the rocket in different directions
    let rightButton = this.document.getElementById('right');
    let leftButton = this.document.getElementById('left');
    let upButton = this.document.getElementById('up');
    let downButton = this.document.getElementById('down');

    leftButton.addEventListener('click', () => {
        let currentTransform = rocket.style.transform;
        if (!currentTransform) {
            rocket.style.transform = 'translateX(-10px)';
        }
        let currentX = Number(currentTransform
            .replace('translateX(', '')
            .replace(')', '')
            .replace('px', '')
            );
        currentX += -10;
        rocket.style.transform = `translateX(${currentX}px)`;

    });

        rightButton.addEventListener('click', () => {
            let currentTransform = rocket.style.transform;
            if (!currentTransform) {
                rocket.style.transform = 'translateX(10px)';
            }
            let currentX = Number(currentTransform
                .replace('translateX(', '')
                .replace(')', '')
                .replace('px', '')
                );
            currentX += 10;
            rocket.style.transform = `translateX(${currentX}px)`;
    });

    upButton.addEventListener('click', () =>{        
        let currentHeight = Number(spaceShuttleHeight.innerText);
        spaceShuttleHeight.innerText = currentHeight + 10000;
        
    });

    downButton.addEventListener('click', () =>{
        let currentHeight = Number(spaceShuttleHeight.innerText);
        spaceShuttleHeight.innerText = currentHeight - 10000;
    
    });
});