//1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Person{
    constructor(name, gender) {
        this.name = name;
        this.age = gender;
    }
    constructor(name, gender) {
        this.name = name;
        this.age = gender;
    }
}
//2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Apartmens{
    residents=[];
}
addResident (resident) {
    this.residents.push(resident);
}

//3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира,
// перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так,
// додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
class Building{
    constructor (maxApartmentNumber){
        this. maxApartmens = maxApartments;
        this.apartmens =[];
}

addApartment (apartment){
    if (this.apartments.length < this.maxApartments) {
        this. apartments.push (apartment);
        console. Log('apartments of the building:, this.apartments);
    }
else{
    console.log(`apartmens of the another `)
    }
}

//В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

    const person1=new Person( 'Felix','man');
    const person2=new Person( 'Dima','woman');
    const person3=new Person( "Ira",'woman');
    console.log ('friends',person1, person2, person3);

    const apartment1=new Apartment();
    const apartment2=new Apartment();
    const apartment3=new Apartment();


    apartment1.addResident(person1).addResident(person2);
    apartment2.addResident(person3).addResident(person4);

    const buielding1=new Building(maxApartments3);
    const buielding2=new Building(maxApartments4);
    const buielding3=new Building(maxApartments2);


