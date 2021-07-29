
function solve(arr, inputCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
        let tickets = [];
        arr.map(x=> {
            let[destination,price,status] = x.split('|');
            let current = new Ticket(destination,price,status);
            tickets.push(current);
        });

        console.log(tickets.sort((a,b)=>{
            if(typeof a[inputCriteria] ==='number'){
                return a[inputCriteria] - b[inputCriteria];
            }else{
                return ((a[inputCriteria]<b[inputCriteria]) ? -1 :((a[inputCriteria]>b[inputCriteria]) ? 1 : 0));
            }
        }));

        return tickets;
}
solve(
['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
