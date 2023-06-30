import {CountriesInMemoryRepository} from "./countriesInMemoryRepository.js";
import chai from "chai";

const expect = chai.expect

describe("filter countries, people and animals by animal name containing the filter value", () => {
    it("removes animals whose name does not match", () => {
        // Given
        const data = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Anoa"},
                                    {name: "Duck"},
                                    {name: "Narwhal"},
                                    {name: "Badger"},
                                    {name: "Cobra"},
                                    {name: "Crow"}]
                        }
                    ]
            }];
        const countriesInMemoryRepository = new CountriesInMemoryRepository(data);

        //When
        const countriesObtained = countriesInMemoryRepository.filterCountriesAndPeopleAndAnimalsByAnimalNameContaining("noa");

        //Then
        const countriesExpected = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Anoa"}]
                        }
                    ]
            }];
        expect(countriesObtained).to.deep.equal(countriesExpected);
    });

    it("removes people without animal", () => {
        // Given
        const data = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Anoa"},
                                    {name: "Duck"},
                                    {name: "Narwhal"},
                                    {name: "Badger"},
                                    {name: "Cobra"},
                                    {name: "Crow"}]
                        },
                        {
                            name: "Blanche Viciani",
                            animals:
                                [{name: "Barbet"},
                                    {name: "Rhea"},
                                    {name: "Snakes"},
                                    {name: "Antelope"},
                                    {name: "Echidna"},
                                    {name: "Crow"},
                                    {name: "Guinea Fowl"},
                                    {name: "Deer Mouse"}]
                        }
                    ]
            }];
        const countriesInMemoryRepository = new CountriesInMemoryRepository(data);

        //When
        const countriesObtained = countriesInMemoryRepository.filterCountriesAndPeopleAndAnimalsByAnimalNameContaining("ck");

        //Then
        const countriesExpected = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Duck"}]
                        }
                    ]
            }];
        expect(countriesObtained).to.deep.equal(countriesExpected);
    });

    it("removes countries without people", () => {
        // Given
        const data = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Anoa"},
                                    {name: "Duck"},
                                    {name: "Narwhal"},
                                    {name: "Badger"},
                                    {name: "Cobra"},
                                    {name: "Crow"}]
                        }
                    ]
            },
            {
                name: "Tohabdal",
                people:
                    [{
                        name: "Effie Houghton",
                        animals:
                            [{name: "Zebra"},
                                {name: "Ring-tailed Lemur"},
                                {name: "Fly"},
                                {name: "Blue Iguana"},
                                {name: "Emu"},
                                {name: "African Wild Ass"},
                                {name: "Numbat"}]
                    }]
            }];

        const countriesInMemoryRepository = new CountriesInMemoryRepository(data);

        //When
        const countriesObtained = countriesInMemoryRepository.filterCountriesAndPeopleAndAnimalsByAnimalNameContaining("ck");

        //Then
        const countriesExpected = [
            {
                name: "Dillauti",
                people:
                    [
                        {
                            name: "Winifred Graham",
                            animals:
                                [{name: "Duck"}]
                        }
                    ]
            }];
        expect(countriesObtained).to.deep.equal(countriesExpected);
    });
});

describe("get countries and people with children count", () => {
    it("add how many people countries have, in countries name", () => {
        // Given
        const countries = [
            {
                name: "Dillauti",
                people:
                    []
            }]
        const countriesInMemoryRepository = new CountriesInMemoryRepository(countries);

        // When
        const countriesObtained = countriesInMemoryRepository.getCountriesAndPeopleWithChildrenCount();

        // Then
        const countriesExpected = [
            {
                name: "Dillauti [0]",
                people:
                    []
            }]
        expect(countriesObtained).to.deep.equal(countriesExpected);
    });

    it("add how many animals people have, in peoples name", () => {
        // Given
        const countries = [{
            name: 'Dillauti',
            people:
                [{
                    name: 'Winifred Graham',
                    animals:
                        [{name: 'Anoa'},
                            {name: 'Duck'},
                            {name: 'Narwhal'},
                            {name: 'Badger'},
                            {name: 'Cobra'},
                            {name: 'Crow'}]
                }]
        }];

        const countriesInMemoryRepository = new CountriesInMemoryRepository(countries);

        // When
        const countriesObtained = countriesInMemoryRepository.getCountriesAndPeopleWithChildrenCount();

        // Then
        const countriesExpected = [{
            name: 'Dillauti [1]',
            people:
                [{
                    name: 'Winifred Graham [6]',
                    animals:
                        [{name: 'Anoa'},
                            {name: 'Duck'},
                            {name: 'Narwhal'},
                            {name: 'Badger'},
                            {name: 'Cobra'},
                            {name: 'Crow'}]
                }]
        }];
        expect(countriesObtained).to.deep.equal(countriesExpected);
    });
});