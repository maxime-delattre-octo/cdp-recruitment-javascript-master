import {execSync} from 'child_process';
import chai from "chai";

const expect = chai.expect

it('shows countries and people and animals matching animal name filter', () => {
    const consoleOutput = execSync('node app.js --filter=ry', { encoding: 'utf-8' });
    expect(consoleOutput).to.include('[\n' +
        '  {\n' +
        '    "name": "Uzuzozne",\n' +
        '    "people": [\n' +
        '      {\n' +
        '        "name": "Lillie Abbott",\n' +
        '        "animals": [\n' +
        '          {\n' +
        '            "name": "John Dory"\n' +
        '          }\n' +
        '        ]\n' +
        '      }\n' +
        '    ]\n' +
        '  },\n' +
        '  {\n' +
        '    "name": "Satanwi",\n' +
        '    "people": [\n' +
        '      {\n' +
        '        "name": "Anthony Bruno",\n' +
        '        "animals": [\n' +
        '          {\n' +
        '            "name": "Oryx"\n' +
        '          }\n' +
        '        ]\n' +
        '      }\n' +
        '    ]\n' +
        '  }\n' +
        ']');
});