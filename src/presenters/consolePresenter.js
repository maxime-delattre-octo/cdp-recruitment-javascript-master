export class ConsolePresenter {

    show(data) {
        console.log(JSON.stringify(data, null, 2));
    }
}