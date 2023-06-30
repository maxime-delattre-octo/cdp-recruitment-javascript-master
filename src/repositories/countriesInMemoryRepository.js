export class CountriesInMemoryRepository {
    countries;

    constructor(countries) {
        this.countries = countries;
    }

    filterCountriesAndPeopleAndAnimalsByAnimalNameContaining(animalNameFilter) {
        return this.deepCopy(this.countries)
            .map(this.removeAnimalsNotMatching(animalNameFilter))
            .map(this.removePeopleWithoutAnimal())
            .filter(this.havePeople());
    }

    getCountriesAndPeopleWithChildrenCount() {
        return this.deepCopy(this.countries)
            .map(country => {
                return {
                    name: country.name + this.formatAmountOfChildren(country.people.length),
                    people: country.people.map(this.addAnimalAmountInPersonName())
                }})
    }

    deepCopy(data) {
        return JSON.parse(JSON.stringify(data));
    }

    removeAnimalsNotMatching(animalNameFilter) {
        return country => {
            return {
                ...country, people: country.people.map(
                    people => {
                        return {
                            ...people, animals: people.animals.filter(
                                animal => animal.name.includes(animalNameFilter))
                        }
                    })
            }
        };
    }

    removePeopleWithoutAnimal() {
        return country => {
            return {
                ...country, people: country.people.filter(
                    people => people.animals.length > 0)
            }
        };
    }

    havePeople() {
        return country => country.people.length > 0;
    }

    formatAmountOfChildren(value) {
        return " [" + value + "]";
    }

    addAnimalAmountInPersonName() {
        return person => {
            return {
                ...person,
                name: person.name + this.formatAmountOfChildren(person.animals.length),
            }
        };
    }
}

