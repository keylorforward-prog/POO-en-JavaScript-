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

}

class Client {
    constructor (name, document){
        this.name = name;
        this.document = document;
    }
}

class Reserve {
    constructor (client, room, dateIn, dateOut){
        this.client = client;
        this.room = room;
        this.dateIn = dateIn;
        this.dateOut = dateOut;
    }

}


