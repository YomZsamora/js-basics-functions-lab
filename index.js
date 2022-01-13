const scuberHeadquarters = 42;

// Returns a distance in blocks
function distanceFromHqInBlocks(pickUpLocation) {
    const distanceInBlocks = pickUpLocation > scuberHeadquarters ? pickUpLocation - scuberHeadquarters : scuberHeadquarters - pickUpLocation;
    return distanceInBlocks;
}