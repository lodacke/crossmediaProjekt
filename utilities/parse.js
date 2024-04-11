export function parseText(text) {
    const pairs = text.split(',').map(pair => pair.trim());
    const result = {};

    pairs.forEach(pair => {
        const [key, value] = pair.split(':').map(item => item.trim());
        result[key] = value;
    });

    return result;
}