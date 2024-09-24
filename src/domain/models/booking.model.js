import { User } from "./user.model";
import { Locker } from "./locker.model";

export class Booking {

    _id;
    _user;
    _locker;
    _startTime;
    _endTime;
    _status;

    constructor (id, User, Locker, startTime, endTime, status) {
        this._id = id,
        this._user = User,
        this._locker = Locker,
        this._startTime = startTime,
        this._endTime = endTime,
        this.status = status
    }

    getId() {
        return this._id;
    }

    getUser() {
        return this._user;
    }

    getLocker() {
        return this._locker;
    }

    getStartTime() {
        return this._startTime;
    }

    getEndTime() {
        return this._endTime;
    }

    getStatus() {
        return this._status;
    }

    setId(value) {
        this._id = value;
    }

    setUser(value) {
        this._user = value;
    }

    setLocker(value) {
        this._locker = value;
    }

    setStartTime(value) {
        this._startTime = value;
    }

    setEndTime(value) {
        this._endTime = value;
    }

    setStatus(value) {
        this._status = value;
    }

}