export class Locker {

    _id;
    _localisation;
    _status;
    _capacity;
    _type;

    constructor (id, localisation, status, capacity, type) {
        this._id = id,
        this._localisation = localisation,
        this._status = status,
        this._capacity = capacity,
        this._type = type
    }

    getId() {
        return this._id;
    }

    getLocalisation() {
        return this._localisation;
    }

    getStatus() {
        return this._status;
    }

    getCapacity() {
        return this._capacity;
    }

    getType() {
        return this._type;
    }

    // Setters
    setId(value) {
        this._id = value;
    }

    setLocalisation(value) {
        this._localisation = value;
    }

    setStatus(value) {
        this._status = value;
    }

    setCapacity(value) {
        this._capacity = value;
    }

    setType(value) {
        this._type = value;
    }

}