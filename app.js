import {data} from "./data.js";
import {
    ShowCountriesAndPeopleAndAnimalsMatchingFilter
} from "./src/usecases/showCountriesAndPeopleAndAnimalsMatchingFilter.js";
import {CountriesInMemoryRepository} from "./src/repositories/countriesInMemoryRepository.js";
import {ConsolePresenter} from "./src/presenters/consolePresenter.js";
import {ShowCountriesAndPeopleWithChildrenCount} from "./src/usecases/showCountriesAndPeopleWithChildrenCount.js";

export class App {
    showCountriesAndPeopleAndAnimalsMatchingFilter;
    showCountriesAndPeopleWithChildrenCount;

    constructor(showCountriesAndPeopleAndAnimalsMatchingFilter, showCountriesAndPeopleWithChildrenCount) {
        this.showCountriesAndPeopleAndAnimalsMatchingFilter = showCountriesAndPeopleAndAnimalsMatchingFilter;
        this.showCountriesAndPeopleWithChildrenCount = showCountriesAndPeopleWithChildrenCount;
    }

    run() {
        const thirdCommandLineArgArray = process.argv.slice(2, 3);

        if (thirdCommandLineArgArray === undefined || thirdCommandLineArgArray === null) {
            // do nothing
        } else {
            const thirdCommandLineArg = thirdCommandLineArgArray[0];

            if (thirdCommandLineArg.includes("--filter")) {
                const filterValue = thirdCommandLineArg.replace("--filter=", "");
                this.showCountriesAndPeopleAndAnimalsMatchingFilter.execute(filterValue);
            }

            if (thirdCommandLineArg.includes("--count")) {
                this.showCountriesAndPeopleWithChildrenCount.execute();
            }
        }
    }
}

// dependency injection
const app = new App(
    new ShowCountriesAndPeopleAndAnimalsMatchingFilter(
        new CountriesInMemoryRepository(data),
        new ConsolePresenter()
    ),
    new ShowCountriesAndPeopleWithChildrenCount(
        new CountriesInMemoryRepository(data),
        new ConsolePresenter()
    )
)

app.run();