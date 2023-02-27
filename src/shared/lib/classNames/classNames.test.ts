import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with cls', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional', () => {
        const expected = 'testClass additionalClass1 additionalClass2';
        expect(classNames('testClass', {}, ['additionalClass1', 'additionalClass2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'testClass additionalClass1 additionalClass2 scroll hover';
        expect(classNames(
            'testClass',
            { scroll: true, hover: true },
            ['additionalClass1', 'additionalClass2'],
        ))
            .toBe(expected);
    });

    test('with false mod', () => {
        const expected = 'testClass additionalClass1 additionalClass2 hover';
        expect(classNames(
            'testClass',
            { scroll: false, hover: true },
            ['additionalClass1', 'additionalClass2'],
        ))
            .toBe(expected);
    });

    test('with undefined mod', () => {
        const expected = 'testClass additionalClass1 additionalClass2 scroll';
        expect(classNames(
            'testClass',
            { scroll: true, hover: undefined },
            ['additionalClass1', 'additionalClass2'],
        ))
            .toBe(expected);
    });
});
