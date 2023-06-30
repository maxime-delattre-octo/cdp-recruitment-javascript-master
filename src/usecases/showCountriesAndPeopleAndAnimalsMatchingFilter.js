export class ShowCountriesAndPeopleAndAnimalsMatchingFilter {
    countriesInMemoryRepository;
    consolePresenter;

    constructor(countriesInMemoryRepository, consolePresenter) {
        this.countriesInMemoryRepository = countriesInMemoryRepository;
        this.consolePresenter = consolePresenter;
    }

    execute(animalNameFilter) {
        const countriesFiltered = this.countriesInMemoryRepository
            .filterCountriesAndPeopleAndAnimalsByAnimalNameContaining(animalNameFilter);
        this.consolePresenter.show(countriesFiltered);
    }
}