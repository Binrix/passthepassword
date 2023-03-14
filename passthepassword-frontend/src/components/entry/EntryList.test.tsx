import { EntryList } from './EntryList';
import { shallow } from 'enzyme';

describe('EntryList', () => {
    it('test', () => {
        const entries = [
            {
                id: 1,
                url: "test",
                nameOfWebsite: "test",
                username: "test",
                password: "test"
            },
        ];

        const wrapper = shallow(<EntryList entries={entries}></EntryList>);
    });
});

