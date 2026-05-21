import { sortHeroesHealth } from '../index';

test('sorts the heroes in descending order of health', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
    ]

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    expect(sortHeroesHealth(input)).toEqual(expected);
});

test('processes an empty array', () => {
    expect(sortHeroesHealth([])).toEqual([]);
});

test('sorts an array with the same health values', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 10},
        {name: 'лучник', health: 10}
    ]

    expect(sortHeroesHealth(input)).toEqual(input);
});