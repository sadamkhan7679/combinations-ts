import {Combination, PropertyValues} from "../types";


const generateCombinations: Combination = (values: PropertyValues): Array<object>=> {
    const keys = Object.keys(values);
    let combinations: Array<object> = [];

    function generateCombinations(current: object, index: number): void {
        if (index === keys.length) {
            combinations.push(current);
            return;
        }

        const key = keys[index];
        const currentValues = values[key];

        for (const value of currentValues) {
            generateCombinations({ ...current, [key]: value }, index + 1);
        }
    }

    generateCombinations({}, 0);

    return combinations;
}

export { generateCombinations };
