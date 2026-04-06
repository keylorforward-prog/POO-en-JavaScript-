//Hotel //sqlizer

class Hotel {
    constructor(name, rooms, reserves){
        this.name = name;
        this.rooms = rooms;
        this.reserves = reserves;
    }
    
    displayHotelInfo(){
        console.log(`Hotel Name: ${this.name}`);
        console.log(`Hotel Rooms: ${this.rooms} in the hotel`);
        console.log(`Reserves: ${this.reserves} in this hotel`);     
    }
}

const Hotel1 = new Hotel ("Hotel California", 20, 13);
Hotel1.displayHotelInfo();

class Room {
    constructor(number, type, price, available){
        this.number = number;
        this.type = type;
        this.price = price;
        this.available = available;
    }
    displayRoomInfo(){
        console.log(`Room number: ${this.number}`);
        console.log(`This Room is: ${this.type} kind`);
        console.log(`The price is ${this.price} in this Room`);
        console.log(`Reserves are: ${this.available} in this Room`);     
    }
}

const Room1 = new Room (18, "Suite", 18.99, true)
Room1.displayRoomInfo();

class Client {
    constructor (name, document){
        this.name = name;
        this.document = document;
    }
    displayClientInfo(){
        console.log(`Client Name is: ${this.name}`);
        console.log(`Document number is: ${this.document}`);
    }
}

const Client14 = new Client ("Keylor", 4566547)
Client14.displayClientInfo();

class Reserve {
    constructor (clientReserve, room, dateIn, dateOut){
        this.clientReserve = clientReserve;
        this.room = room;
        this.dateIn = dateIn;
        this.dateOut = dateOut;
    }
    displayReserveInfo(){
        console.log(`Client Reserve is: ${this.clientReserve}`);
        console.log(`Room number is: ${this.room}`);
        console.log(`Client date in: ${this.dateIn}`);
        console.log(`Client date out: ${this.dateOut}`);
    }
}

const Reserve14 =new Reserve (4566547, 14, "14/03/26", "20/03/26")
Reserve14.displayReserveInfo();