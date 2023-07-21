export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        const previous: number | undefined = flowerbed[i-1];
        const next: number | undefined = flowerbed[i+1];
        const current: number = flowerbed[i];
        const hasNeighbors: boolean =  Boolean(previous) || Boolean(next)

        if (current) continue;

        if (!hasNeighbors) {
            flowerbed[i] = 1;
            count++;
        }
        

    }
    return count >= n;
};