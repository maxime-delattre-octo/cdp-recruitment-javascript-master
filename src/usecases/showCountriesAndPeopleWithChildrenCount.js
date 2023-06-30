export class ShowCountriesAndPeopleWithChildrenCount {
    countriesInMemoryRepository;
    consolePresenter;

    constructor(countriesInMemoryRepository, consolePresenter) {
        this.countriesInMemoryRepository = countriesInMemoryRepository;
        this.consolePresenter = consolePresenter;
    }

    execute() {
        const countriesAndPeopleWithChildrenCount = this.countriesInMemoryRepository
            .getCountriesAndPeopleWithChildrenCount();
        this.consolePresenter.show(countriesAndPeopleWithChildrenCount);
    }
}