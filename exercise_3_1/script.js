class Car {
    constructor(cModelName, cBrand, cProductionYear, cImgLink, cPrice) {
        this.Modelname = cModelName;
        this.brand = cBrand;
        this.productionYear = cProductionYear;
        this.imgURL = cImgLink;
        this.price = cPrice;
    }
}

let carArray = [
    new Car ("Voyager", "Crysler", 1999, "https://images.app.goo.gl/nhQAbmDpBGEyA5Pv8", 2999),
    new Car ("SL500", "Mercedes", 2004, "https://images.app.goo.gl/1x8Ky6DVgooahbTX7", 14999),
    new Car ("Beetle", "VW", 1986, "https://images.app.goo.gl/yv7e5JtKKTcrspFb6", 32999),
    new Car ("Model T T3 Pickup", "Ford", 1921, "https://images.app.goo.gl/FuYWowQTbWagEgRk7", 93999),
    new Car ("P1", "McLaren", 2024, "https://images.app.goo.gl/JfdDeJDnsGAjCEaCA", 2299999)
];

