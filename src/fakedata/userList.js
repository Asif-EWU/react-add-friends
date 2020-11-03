import fakedata from './fakedata.json'

const shuffle = () => {
    for (let i = 0; i < fakedata.length; i++) {
        const j = Math.floor(Math.random() * 100);
        [fakedata[i], fakedata[j]] = [fakedata[j], fakedata[i]];
    }
}

shuffle();

export default fakedata;