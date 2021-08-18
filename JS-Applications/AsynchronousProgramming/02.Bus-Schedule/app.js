function solve() {

    function depart() {
        let nextStopId = 'depot';
        let stopInfoSpan = document.querySelector('#info .info');

        let departBtn = document.getElementById('depart');
        let arriveBtn = document.getElementById('arrive');

        console.log(stopInfoSpan.getAttribute('data-next-stop-id'));

        if (stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
            nextStopId = stopInfoSpan.getAttribute('dat-next-stop-id');
        }

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(body => body.json())
            .then(stopInfo => {
                //console.log(stopInfo);
                stopInfoSpan.setAttribute('data-stop-name', stopInfo.name);
                stopInfoSpan.setAttribute('data-next-stop-id', stopInfo.next);

                stopInfoSpan.textContent = `Next stop ${stopInfo.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;

            })
            .catch(err=>{
                stopInfoSpan.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
    }

    function arrive() {
        let stopInfoSpan = document.querySelector('#info .info');

        let departBtn = document.getElementById('depart');
        let arriveBtn = document.getElementById('arrive');
        let stopName = stopInfoSpan.getAttribute('data-stop-name');
        stopInfoSpan.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();